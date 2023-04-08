import React, { useContext } from 'react';
import { contexto } from '../utils/context';

function UserInfo() {
  const user = useContext(contexto);
  console.log(user);
  return (
    <div>
      <h2>User Info</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default UserInfo;
