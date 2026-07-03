import React from "react";

export function Radio({ label, description, disabled, className="", children, ...rest }) {
  return (
    <label className={["ac-radio",className].filter(Boolean).join(" ")} data-disabled={disabled?"true":"false"}>
      <input type="radio" disabled={disabled} {...rest} />
      <span className="ac-radio__dot" />
      {(label || children || description) && (
        <span className="ac-radio__label"><b>{label || children}</b>{description && <span className="ac-radio__desc">{description}</span>}</span>
      )}
    </label>
  );
}
