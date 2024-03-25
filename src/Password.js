import { useState } from 'react';

function random(n) {
  return Math.floor(Math.random() * n);
}

function generateRandomCharacter() {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
  return characters[random(characters.length)];
}

function generateRandomPassword(length) {
  let password = '';
  for (let i = 0; i < length; i++) {
    password += generateRandomCharacter();
  }
  return password;
}

function generatePatternedPassword() {
  let password = '';
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      password += generateRandomCharacter();
    }
    if (i !== 2) {
      password += '-';
    }
  }
  return password;
}

function generateWordPassword() {
  const words = [
    'apple', 'banana', 'orange', 'grape', 'peach', 'pear', 'cherry', 'strawberry',
    'cat', 'dog', 'squirrel', 'fish', 'rabbit', 'capybara', 'turtle', 'horse',
    'happy', 'sad', 'angry', 'excited', 'calm', 'sleepy', 'hungry', 'thirsty'
  ];

  const passwordLength = random(5) + 4;
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    password += words[random(words.length)] + ' ';
  }
  return password.trim();
}

function Password() {
  const [password, setPassword] = useState('');

  const handleGenerate = (type) => {
    let newPassword = '';
    if (type === 'random') {
      newPassword = generateRandomPassword(8);
    } else if (type === 'pattern') {
      newPassword = generatePatternedPassword();
    } else if (type === 'word') {
      newPassword = generateWordPassword();
    }
    setPassword(newPassword);
  };

  return (
    <div>
      <div>{password}</div>
      <div>
        <button onClick={() => handleGenerate('random')}>Generate Random Password</button>
        <button onClick={() => handleGenerate('pattern')}>Generate Patterned Password</button>
        <button onClick={() => handleGenerate('word')}>Generate Word Password</button>
      </div>
    </div>
  );
}

export default Password;