import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <label>Username: </label>
        <input id='txtusername' ></input>
        <label>Password: </label>
        <input id='txtpassword' ></input>
        <button id='btnlogin'>Login</button>
    </div>
  );
}

export default App;
