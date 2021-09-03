import './App.css';
import Routes from './Routes';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes />
      </Router>
      
    </div>
  );
}

export default App;
