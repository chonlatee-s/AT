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
import Topic from './Topic';
import Error from './Error';
import Expire from './Expire';
import Download from './Download';

//redux
import { createStore } from 'redux'
import Reducer from './Reducer'
import { Provider } from 'react-redux'


function App() {
  const store = createStore(Reducer) // ประกาศค่าคงที่ Store เพื่อเก็บข้อมูลของ State ทั้งหมดที่จะใช้ในแอปพลิเคชัน
  // นำแท็ก Provider ครอบเนื้อหาที่จะแสดงใน App คอมโนแนนต์
  return (
    <BrowserRouter>
    <Provider store = {store}>
      <Menu/>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/PlansAndContact" component={Plans} />
          <Route exact={true} path="/RegisterAndTest" component={Register} />
          <Route exact={true} path="/Exam" component={Exam} />
          <Route exact={true} path="/AboutMe" component={AboutMe} />
          <Route exact={true} path="/Policy" component={Policy} />
          <Route exact={true} path="/Topic" component={Topic} />
          <Route exact={true} path="/Expire" component={Expire} />
          <Route exact={true} path="/Download" component={Download} />
          <Route component={Error} />
        </Switch>
        <Bar/>
        </Provider>
    </BrowserRouter>
  );
}

export default App;
