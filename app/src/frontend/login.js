// Frontend
import { useState } from 'react';
import axios from 'axios';
const Auth = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const handleRegister = async () => {

      await axios.post('http://localhost:5000/register', formData).then((response)=>{console.log(response)}).catch(err=>console.log(err))
    
  }
  const handleLogin = async () => {
    try {
      await axios.post('http://localhost:5000/login', formData);
      alert('Login successful');
      window.location.href='/home'
    } catch (error) {
      alert('Login failed');
    }
  };
  return (
    <div>
      <h1>User Authentication</h1>
      <form>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <br />
        <button type="button" onClick={handleRegister}>Register</button>
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};
export default Auth;
