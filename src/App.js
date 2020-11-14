import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import PrivateRoute from './components/Routes/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/">
          <Main/>
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
