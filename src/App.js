import logo from './logo.svg';
import './App.css';
import ContextPage from './ContextPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>03-state-management</h1>
      </header>
      <ContextPage/>
    </div>
  );
}

export default App;
