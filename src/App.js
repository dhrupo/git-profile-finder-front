import Header from "./components/common/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubState from './context/GithubState';
import Home from './pages/Home';
import UserDetails from "./components/Users/UserDetails";

function App() {
  return (
    <GithubState>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path='/user/:login' component={UserDetails}></Route>
        </Switch>
      </Router>
    </GithubState>
  );
}

export default App;
