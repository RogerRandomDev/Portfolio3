import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";

import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home/>}/>
      </Switch>
    </Router>
  );
}

export default App;
