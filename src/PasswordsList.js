import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePassword } from './features/passwords/passwordsSlice';
import './PasswordsList.css'; 

function PasswordsList() {
  const passwords = useSelector(state => state.passwords.value);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deletePassword(id));
  };

  return (
    <ul>
      {passwords.map(password => (
        <li key={password.id}>
          <span className="name">{password.name}</span>
          <span className="password">{password.password}</span>
          <button className="delete-button" onClick={() => handleDelete(password.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default PasswordsList;