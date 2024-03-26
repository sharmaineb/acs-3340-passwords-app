import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPassword } from './features/passwords/passwordsSlice.js';
import PasswordStrength from './PasswordStrength.js';
import './Password.css';

function Password() {
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeHyphens, setIncludeHyphens] = useState(false);
  const [generatorType, setGeneratorType] = useState('letters');
  
  const dispatch = useDispatch();

  const generatePassword = () => {
    let characters = '';
    let generatedPassword = '';

    if (generatorType === 'letters') {
      characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    } else if (generatorType === 'lettersNumbers') {
      characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    } else if (generatorType === 'lettersNumbersPunctuation') {
      characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    }

    for (let i = 0; i < passwordLength; i++) {
      generatedPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    if (includeHyphens) {
      const regex = new RegExp(`.{3}`, 'g');
      generatedPassword = generatedPassword.match(regex).join('-');
    }

    setPassword(generatedPassword);
  };

  return (
    <div className="container">
      <div className="input-container">
        <input 
          type="text"
          value={password}
          readOnly
        />
      </div>
      <div className="input-container">
        <input 
          type="text"
          placeholder="Enter Name or Description"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Password Length:</label>
        <input 
          type="range"
          min="4"
          max="20"
          value={passwordLength}
          onChange={(e) => setPasswordLength(parseInt(e.target.value))}
        />
        <span>{passwordLength}</span>
      </div>
      <div className="input-container">
        <label>
          Include Hyphens:
          <input 
            type="checkbox"
            checked={includeHyphens}
            onChange={(e) => setIncludeHyphens(e.target.checked)}
          />
        </label>
      </div>
      <div className="input-container">
        <select value={generatorType} onChange={(e) => setGeneratorType(e.target.value)}>
          <option value="letters">Letters</option>
          <option value="lettersNumbers">Letters + Numbers</option>
          <option value="lettersNumbersPunctuation">Letters + Numbers + Punctuation</option>
        </select>
      </div>
      <div className="buttons-container">
        <button onClick={generatePassword}>Generate</button>
        <button
          onClick={() => dispatch(addPassword({ name, password }))}
          className='button' 
        >Save</button>
      </div>
      <PasswordStrength password={password} />
    </div>
  );
}

export default Password;