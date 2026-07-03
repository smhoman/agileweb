import React from "react";

const ICONS = {
  success: <polyline points="20 6 9 17 4 12" />,
  warning: <><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></>,
  danger: <><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></>,
  info: <><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></>,
  honey: <><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></>,
};

export function Toast({ tone="info", title, description, onClose, className="", ...rest }) {
  return (
    <div className={["ac-toast",`ac-toast--${tone}`,className].filter(Boolean).join(" ")} role="status" {...rest}>
      <span className="ac-toast__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">{ICONS[tone]}</svg></span>
      <div className="ac-toast__body">{title && <p className="ac-toast__title">{title}</p>}{description && <p className="ac-toast__desc">{description}</p>}</div>
      {onClose && (<button type="button" className="ac-toast__x" aria-label="Dismiss" onClick={onClose}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>)}
    </div>
  );
}
