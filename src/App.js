import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
