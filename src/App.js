import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link, useLocation} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';
// import './main.js';

import NavBar from './pages/navbar';
import PageWrapper from './pages/pagewrapper';


function App() {
  return (
    <div className="App">
        <Router basename="/">
         <div className="App">
            <div id="page" className="page one-page-style">
                <NavBar/>
                <PageWrapper/>
        
            </div>
          </div>
        </Router>
    </div>
  );
}

export default App;
