import React from "react";

export function Button({ variant="primary", size="md", fullWidth=false, disabled=false, type="button", href, iconLeft, iconRight, onClick, className="", children, ...rest }) {
  const cls = ["ac-btn",`ac-btn--${variant}`,`ac-btn--${size}`,fullWidth?"ac-btn--full":"",className].filter(Boolean).join(" ");
  const inner = (<>{iconLeft && <span className="ac-btn__icon">{iconLeft}</span>}{children}{iconRight && <span className="ac-btn__icon">{iconRight}</span>}</>);
  if (href && !disabled) return <a href={href} className={cls} onClick={onClick} {...rest}>{inner}</a>;
  return <button type={type} className={cls} disabled={disabled} onClick={onClick} {...rest}>{inner}</button>;
}
