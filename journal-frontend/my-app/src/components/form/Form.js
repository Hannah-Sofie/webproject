import React from 'react';

// this is a reusable form you can use to not having to create the forms from scratch

const FormInput = ({ label, type, name, value, onChange, placeholder, className }) => (
  <div className={`form-group ${className}`}>
    {label && <label className="form-label">{label}</label>}
    {type === 'textarea' ? (
      <textarea
        className="form-input"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    ) : (
      <input
        type={type}
        className="form-input"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    )}
  </div>
);

export const ReusableForm = ({ inputs, handleFormSubmit, children }) => (
  <form onSubmit={handleFormSubmit}>
    {inputs.map((inputProps, index) => (
      <FormInput key={index} {...inputProps} />
    ))}
    {children}
    <div className="form-buttons">
      <button type="submit" className="button submit-btn">Submit</button>
    </div>
  </form>
);
