import Greeting from "./components/Greeting";
import Header  from "./components/Header";
import NavBar from './components/NavBar'
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import SelectNation from "./components/SelectNation";
import history from './components/history'
import EarthKingdom from './components/EarthKingdom'
import WaterTribe from './components/WaterTribe'
import AirNomads from './components/AirNomads'
import CharacterDetail from "./components/CharacterDetail";

function App() {
  return (
    <div>
      <Router history={history}>
        <NavBar />
        {/* <Header/> */}
        <Switch>
          <Route path="/" exact component={Header} />
          <Route path="/fire-nation" component={Greeting} />
          <Route path="/earth-kingdom" component={EarthKingdom} />
          <Route path="/water-tribe" component={WaterTribe} />
          <Route path="/air-nomads" component={AirNomads}/>
          <Route path="/select-nation" component={SelectNation} />
          <Route path="/character-detail" component={CharacterDetail} />
        </Switch>
      </Router>
    </div>
  )
}



export default App;
