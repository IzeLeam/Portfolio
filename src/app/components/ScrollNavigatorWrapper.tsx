"use client";

import ScrollNavigator from "./ScrollNavigator";
import { usePathname } from "next/navigation";

const ROUTES = ["/", "/about", "/projects", "/cyber", "/blogs"];

export default function ScrollNavigatorWrapper() {
  const pathname = usePathname();
  const idx = ROUTES.indexOf(pathname || "/");
  const next = idx >= 0 && idx < ROUTES.length - 1 ? ROUTES[idx + 1] : undefined;
  const prev = idx > 0 ? ROUTES[idx - 1] : undefined;

  return <ScrollNavigator nextHref={next} prevHref={prev} />;
}
