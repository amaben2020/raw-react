//@ts-nocheck

import React, { useState } from 'react';
import { EmailInput, PasswordInput } from './EmailInput';

type LoginFormProps = {
  onSubmit: (email: string, password: string) => void;
};

const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { onSubmit } = props;

  // Use local state to work with form values:
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Use change handler to update the email value:
  const updateEmail = (newValue: string): void => setEmail(value);

  // ...And use handler to update the password:
  const updatePassword = React.useCallback(
    (newValue: string): void => setPassword(newValue),
    []
  );

  return (
    <form onSubmit={onSubmit}>
      <EmailInput value={email} onChange={updateEmail} />

      <PasswordInput value={email} onChange={updatePassword} />
    </form>
  );
};
