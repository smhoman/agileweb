import React from "react";

export function Stat({ value, label, eyebrow, delta, direction="up", onDark=false, className="", ...rest }) {
  const cls = ["ac-stat",onDark?"ac-stat--onDark":"",className].filter(Boolean).join(" ");
  return (
    <div className={cls} {...rest}>
      {eyebrow && <span className="ac-stat__eyebrow">{eyebrow}</span>}
      <span className="ac-stat__value">{value}</span>
      {label && <span className="ac-stat__label">{label}</span>}
      {delta != null && (
        <span className={`ac-stat__delta ac-stat__delta--${direction}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            {direction==="up"?<polyline points="6 15 12 9 18 15"/>:<polyline points="6 9 12 15 18 9"/>}
          </svg>{delta}
        </span>
      )}
    </div>
  );
}
