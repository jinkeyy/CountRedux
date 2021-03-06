import logo from './logo.svg';
import './App.css';
import ClickApp from "./components/ClickApp"

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <ClickApp />
    </div>
  );
}

export default App;
