import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import header from './img/header.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="text-center mt-3">
        <img src={header} alt="Header" style={{ width: "400px", height: "auto" }}/>
      </div>
    </div>
  );
}

export default App;