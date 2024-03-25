import { useSelector } from 'react-redux'
import './PasswordsList.css';

function PasswordsList() {
  const passwords = useSelector(state => state.passwords.value)

  return (
    <ul>
      {passwords.map(password => (
        <li>{password.name} - {password.password}</li>
      ))}
    </ul>
  )
}

export default PasswordsList