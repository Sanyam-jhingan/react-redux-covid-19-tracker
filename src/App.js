import { GridContainer } from './components/GridContainer';
import "leaflet/dist/leaflet.css"
import AppBar from "./components/AppBar"
//import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      <AppBar />
      <GridContainer />
    </div>
  )
}

export default App
