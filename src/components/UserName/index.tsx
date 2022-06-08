import { useState } from 'react';
import { UserNameStyled } from './styles';

type UserNameProps = {
  anyProps?: string;
};

export function UserName({ anyProps }: UserNameProps) {
  const [description, setDescription] = useState('');

  // Modificando arquivo UserName
  // PLOP AUTO GENERATE. DO NOT REMOVE

  return (
    <UserNameStyled>
      <h1>user-name</h1>
      <h1>userName</h1>
      <h1>user_name</h1>
    </UserNameStyled>
  );
}
