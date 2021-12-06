import logo from './logo.svg';
import './App.css';
import ListCarComponent from './components/ListCarComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="App-title">Car Show</h1>
      </header>
      <div className="App-container">
        <ListCarComponent/>
      </div>
    </div>
  );
}

export default App;
