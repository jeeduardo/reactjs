import logo from './logo.svg';
import './App.css';
import Catalog from './Catalog';
import Register from './Register';

function App() {
  return (
    <div className="App">
      <div className="main">
        <Register />
        <Catalog />
      </div>
    </div>
  );
}

export default App;
