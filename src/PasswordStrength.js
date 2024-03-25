import React from 'react';
import zxcvbn from 'zxcvbn';

const PasswordStrength = ({ password }) => {
  const evaluation = zxcvbn(password);

  const getStrengthColor = (score) => {
    switch (score) {
      case 0:
        return '#ff0000'; 
      case 1:
        return '#ff7f00'; 
      case 2:
        return '#ffff00'; 
      case 3:
        return '#7fff00'; 
      case 4:
        return '#00ff00'; 
      default:
        return '#ffffff'; 
    }
  };

  const strengthBarStyle = {
    width: `${(evaluation.score + 1) * 20}%`,
    height: '20px',
    backgroundColor: getStrengthColor(evaluation.score),
    borderRadius: '4px',
    transition: 'width 0.5s ease-in-out',
  };

  return (
    <div>
      <h3>Password Strength</h3>
      <div style={{ marginBottom: '10px' }}>Score: {evaluation.score}/4</div>
      <div style={{ marginBottom: '10px' }}>Time to Crack: {evaluation.crack_times_display.offline_slow_hashing_1e4_per_second}</div>
      <div style={{ marginBottom: '10px' }}>
        <div style={strengthBarStyle}></div>
      </div>
    </div>
  );
};

export default PasswordStrength;