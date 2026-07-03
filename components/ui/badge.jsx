import React from "react";

export function Badge({ tone="neutral", variant="soft", dot=false, className="", children, ...rest }) {
  const cls = ["ac-badge",`ac-badge--${tone}`,variant!=="soft"?`ac-badge--${variant}`:"",className].filter(Boolean).join(" ");
  return <span className={cls} {...rest}>{dot && <span className="ac-badge__dot" />}{children}</span>;
}
