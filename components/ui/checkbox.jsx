import React from "react";

export function Checkbox({ label, description, disabled, className="", children, ...rest }) {
  return (
    <label className={["ac-check",className].filter(Boolean).join(" ")} data-disabled={disabled?"true":"false"}>
      <input type="checkbox" disabled={disabled} {...rest} />
      <span className="ac-check__box"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></span>
      {(label || children || description) && (
        <span className="ac-check__label"><b>{label || children}</b>{description && <span className="ac-check__desc">{description}</span>}</span>
      )}
    </label>
  );
}
