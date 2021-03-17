import { Router, Link } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './components/Index/Index';
import Home from './components/Home/Home';
import StringPage from './components/String/String';
import NumPage from './components/Num/Num';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="w-35">
          <ul className="list list-unstyled">
            <div className="d-flex flex-row justify-content-evenly">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/:num">Number</Link>
              </li>
              <li>
                <Link to="/:str">String</Link>
              </li>
              <li>
                <Link to="/:str/:color/:backgroundColor">String-Colored</Link>
              </li>
            </div>
          </ul>
        </div>
      </header>
      <Router>
        <Index path="/" />
        <Home path="/home" />
        <NumPage path="/:num" />
        <StringPage 
          path="/:str"
        />
        <StringPage 
          path="/:str/:color/:backgroundColor"
        />
      </Router>
    </div>
  );
}

export default App;
