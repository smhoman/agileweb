import * as icons from "lucide-react";

// <Icon n="arrow-right" /> -> <ArrowRight />
export function Icon({ n, size=18, ...rest }) {
  const key = String(n).split("-").map((s)=>s.charAt(0).toUpperCase()+s.slice(1)).join("");
  const Cmp = icons[key];
  return Cmp ? <Cmp size={size} {...rest} /> : null;
}
