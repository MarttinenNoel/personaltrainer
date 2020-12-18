
import './App.css';
import Customerlist from './components/Customerlist';
import Traininglist from './components/Traininglist';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <Link to="/customers">Customers</Link>{' '}
        <Link to="/trainings">Trainings</Link>{' '}
        <Switch>
          <Route exact path="/customers" component={Customerlist}/>
          <Route exact path="/trainings" component={Traininglist}/>
        </Switch>
      </div>
    </Router>

    </div>
  );
}

export default App;
