import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Sai tên đăng nhập hoặc mật khẩu!');
    }
  };

  if (isLoggedIn) {
    return (
      <div className="App">
        <h1>Đăng nhập thành công!</h1>
        <p>Chào mừng, {username}!</p>
        <button onClick={() => setIsLoggedIn(false)}>Đăng xuất</button>
      </div>
    );
  }

  return (
    <div className="App">
        <h2>Đăng nhập</h2>
        <div>
          <label>Tên đăng nhập: </label>
          <input 
            id='txtusername' 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Mật khẩu: </label>
          <input 
            id='txtpassword' 
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{color: 'red'}}>{error}</p>}
        <button id='btnlogin' onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
}

export default App;
