import React from "react";

export function Tag({ variant="outline", onRemove, className="", children, ...rest }) {
  const cls = ["ac-tag",variant!=="outline"?`ac-tag--${variant}`:"",className].filter(Boolean).join(" ");
  return (
    <span className={cls} {...rest}>
      {children}
      {onRemove && (
        <button type="button" className="ac-tag__x" aria-label="Remove" onClick={onRemove}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      )}
    </span>
  );
}
