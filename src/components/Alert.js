import React from "react";

export default function Alert(props) {
  const capitalize = (wrd) => {
    const lower = wrd.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    props.alert && (
      <div>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show fixed-bottom`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
        </div>
      </div>
    )
  );
}
