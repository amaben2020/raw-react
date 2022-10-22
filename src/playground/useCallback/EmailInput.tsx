import React from 'react';

// First one to render a user's email:

type EmailInputProps = {
  value: string;
  onChange: (newValue: string) => void;
};

export const EmailInput: React.FC<EmailInputProps> = ({ value, onChange }) => {
  return (
    <label>
      Your email:
      <input
        type='email'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};

// And the second one to render their password:

type PasswordInputProps = {
  value: string;
  onChange: (newValue: string) => void;
};

export const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChange,
}) => {
  return (
    <label>
      Your password:
      <input
        type='password'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};
