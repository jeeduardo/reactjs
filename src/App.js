import logo from './logo.svg';
import './App.css';
import Catalog from './Catalog';

function App() {
  console.log('process.env???', process.env);
  return (
    <div className="App">
      <div className="main">
        <Catalog />
      </div>
    </div>
  );
}

export default App;
