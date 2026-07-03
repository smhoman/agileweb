import React from "react";

function Wrap({ label, required, hint, error, htmlFor, children }) {
  return (
    <label className="ac-field" htmlFor={htmlFor}>
      {label && <span className="ac-field__label">{label}{required && <span className="ac-field__req">*</span>}</span>}
      {children}
      {error ? <span className="ac-field__err">{error}</span> : hint ? <span className="ac-field__hint">{hint}</span> : null}
    </label>
  );
}

export function Input({ label, hint, error, required, disabled, className="", id, ...rest }) {
  const cls = ["ac-input",error?"ac-input--invalid":"",className].filter(Boolean).join(" ");
  const field = <input id={id} className={cls} disabled={disabled} aria-invalid={!!error} {...rest} />;
  if (!label && !hint && !error) return field;
  return <Wrap label={label} required={required} hint={hint} error={error} htmlFor={id}>{field}</Wrap>;
}

export function Textarea({ label, hint, error, required, disabled, rows=4, className="", id, ...rest }) {
  const cls = ["ac-input","ac-input--textarea",error?"ac-input--invalid":"",className].filter(Boolean).join(" ");
  const field = <textarea id={id} rows={rows} className={cls} disabled={disabled} aria-invalid={!!error} {...rest} />;
  if (!label && !hint && !error) return field;
  return <Wrap label={label} required={required} hint={hint} error={error} htmlFor={id}>{field}</Wrap>;
}
