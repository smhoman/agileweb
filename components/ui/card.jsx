import React from "react";

export function Card({ variant="default", padding="md", interactive=false, as="div", className="", children, ...rest }) {
  const Tag = as;
  const cls = ["ac-card",variant!=="default"?`ac-card--${variant}`:"",`ac-card--pad-${padding}`,interactive?"ac-card--interactive":"",className].filter(Boolean).join(" ");
  return <Tag className={cls} {...(interactive && as==="div"?{tabIndex:0}:{})} {...rest}>{children}</Tag>;
}
