import React from "react";
import PropTypes from "prop-types";

export const AnotherThing = ({ label, onChange, name, type = "text" }) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input name={name} type={type} onChange={onChange} />
    </div>
  );
};
export const YetAnotherThing = ({ label, onChange, name, type = "text" }) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input name={name} type={type} onChange={onChange} />
    </div>
  );
};

export const Testing = ({ label, onChange, name, type = "text" }) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input name={name} type={type} onChange={onChange} />
    </div>
  );
};
