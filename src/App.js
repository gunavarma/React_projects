
import './App.css';
import './components/bgimage/gcmini.css';
import './components/bgimage/cominion.css';


import {Nav} from "./components/mainnavbar/navbar.js";
import {Content} from "./components/bgcontent/content.js";
import minion from "./components/bgimage/cominion.jpg";
import minion1 from "./components/bgimage/gcmini.png";
import minion2 from "./components/bgimage/sumini.jpg";
import { Foot } from './components/footer/foot';



function App() {
  return (
    <div className="App">
      <Nav/>
      <Content/>
      <img src={minion} className="mini"/>
      
      <img src={minion1} className="minio"/>
      <Content/>

      <Foot/>
      <img src={minion2} className="minio"/>
    </div>
  );
}

export default App;
