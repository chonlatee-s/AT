import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Register from './Register';
import Plans from './Plans';
import Exam from './Exam';
import Bar from './Bar';
import AboutMe from './AboutMe';
import Policy from './Policy';

function App() {
  return (
    <BrowserRouter>
      <Menu/>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/PlansAndContact" component={Plans} />
          <Route path="/RegisterAndTest" component={Register} />
          <Route path="/Exam" component={Exam} />
          <Route path="/AboutMe" component={AboutMe} />
          <Route path="/Policy" component={Policy} />
        </Switch>
        <Bar/>
    </BrowserRouter>
  );
}

export default App;
