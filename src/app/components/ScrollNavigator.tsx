"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

type Props = {
  nextHref?: string;
  prevHref?: string;
  cooldown?: number;
  threshold?: number;
  confirmDistance?: number; // px of extra scroll required at edge to confirm navigation
  disabled?: boolean;
};

export default function ScrollNavigator({
  nextHref,
  prevHref,
  cooldown = 1000,
  threshold = 0,
  confirmDistance = 0,
  disabled = false,
}: Props) {
  const router = useRouter();
  const last = useRef(0);
  const touchStartY = useRef<number | null>(null);
  const overScroll = useRef(0);

  useEffect(() => {
    if (disabled) return;

    const now = () => Date.now();
    const canNavigateNow = () => now() - last.current > cooldown;

    const isDocumentAtTop = (t = threshold) => {
      const el = (document.scrollingElement || document.documentElement) as HTMLElement | null;
      const scrollTop = el ? (el.scrollTop ?? 0) : 0;
      return scrollTop <= t;
    };
    const isDocumentAtBottom = (t = threshold) => {
      const el = (document.scrollingElement || document.documentElement) as HTMLElement | null;
      const scrollTop = el ? (el.scrollTop ?? 0) : 0;
      const scrollHeight = el ? (el.scrollHeight ?? 0) : 0;
      const innerH = window.innerHeight;
      return scrollTop + innerH >= scrollHeight - t;
    };

    const isSafeToTrigger = () => {
      const ae = document.activeElement as HTMLElement | null;
      if (!ae) return true;
      const tag = ae.tagName?.toLowerCase();
      // Only treat true input fields and contentEditable elements as unsafe.
      if (tag === "input" || tag === "textarea" || ae.isContentEditable) return false;
      // buttons, links, and other controls are fine — keep navigation enabled.
      return true;
    };

    const onWheel = (e: WheelEvent) => {
      if (!canNavigateNow() || !isSafeToTrigger()) return;
      if (Math.abs(e.deltaY) < 6) return;

      const goingDown = e.deltaY > 0;
      const atBottom = isDocumentAtBottom();
      const atTop = isDocumentAtTop();

      // when at edge, accumulate extra scroll distance; require confirmDistance
      if (goingDown && atBottom) {
        overScroll.current += e.deltaY;
        // navigate only after confirmDistance accumulated
        if (overScroll.current >= confirmDistance) {
          if (nextHref) {
            last.current = now();
            router.push(nextHref);
          }
          overScroll.current = 0;
        }
        return;
      }

      if (!goingDown && atTop) {
        // deltaY is negative when going up
        overScroll.current += -e.deltaY;
        if (overScroll.current >= confirmDistance) {
          if (prevHref) {
            last.current = now();
            router.push(prevHref);
          }
          overScroll.current = 0;
        }
        return;
      }

      // reset accumulation if not at edge
      overScroll.current = 0;
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches?.[0]?.clientY ?? null;
      overScroll.current = 0;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (!canNavigateNow() || !isSafeToTrigger()) return;
      const start = touchStartY.current;
      const end = e.changedTouches?.[0]?.clientY ?? null;
      if (start == null || end == null) return;
      const delta = start - end;
      if (delta > confirmDistance && isDocumentAtBottom()) {
        if (nextHref) {
          last.current = now();
          router.push(nextHref);
        }
      } else if (-delta > confirmDistance && isDocumentAtTop()) {
        if (prevHref) {
          last.current = now();
          router.push(prevHref);
        }
      }
      touchStartY.current = null;
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [router, nextHref, prevHref, cooldown, threshold, disabled, confirmDistance]);

  return null;
}
