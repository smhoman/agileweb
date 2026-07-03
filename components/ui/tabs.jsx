"use client";
import React from "react";

export function Tabs({ items=[], value, defaultValue, onChange, variant="line", className="", ...rest }) {
  const [internal,setInternal] = React.useState(defaultValue ?? items[0]?.value);
  const active = value !== undefined ? value : internal;
  const select = (v)=>{ if(value===undefined) setInternal(v); onChange && onChange(v); };
  return (
    <div className={["ac-tabs",`ac-tabs--${variant}`,className].filter(Boolean).join(" ")} {...rest}>
      <div className="ac-tabs__list" role="tablist">
        {items.map((it)=>(
          <button key={it.value} type="button" role="tab" className="ac-tab" data-active={active===it.value} aria-selected={active===it.value} disabled={it.disabled} onClick={()=>select(it.value)}>
            {it.icon}{it.label}
          </button>
        ))}
      </div>
    </div>
  );
}
