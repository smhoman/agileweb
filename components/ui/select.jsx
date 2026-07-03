import React from "react";

export function Select({ options=[], placeholder, disabled, className="", children, ...rest }) {
  return (
    <span className="ac-select-wrap">
      <select className={["ac-select",className].filter(Boolean).join(" ")} disabled={disabled} {...rest}>
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map((o)=>{ const opt = typeof o==="string"?{value:o,label:o}:o; return <option key={opt.value} value={opt.value}>{opt.label}</option>; })}
        {children}
      </select>
    </span>
  );
}
