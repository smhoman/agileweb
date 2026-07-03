"use client";
import { useRouter, usePathname } from "next/navigation";

// Page routes for top-level ids; hash-scroll for "approach"/"proof" (home sections).
export function useGo() {
  const router = useRouter();
  const pathname = usePathname();
  return (id) => {
    const scrollTo = (el) => { if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 66, behavior: "smooth" }); };
    if (id === "approach" || id === "proof") {
      if (pathname !== "/") { router.push("/"); setTimeout(() => scrollTo(document.getElementById(id)), 160); }
      else scrollTo(document.getElementById(id));
      return;
    }
    router.push(id === "home" ? "/" : `/${id}`);
    window.scrollTo(0, 0);
  };
}
