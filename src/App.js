import logo1 from './logo1.svg';
import './App.css';
import Parent from './component/parent-container/Parent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo1} className="App-logo" alt="logo" />
      </header>
      <main>
        <Parent/>
      </main>
    </div>
  );
}

export default App;
