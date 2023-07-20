import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route , Link, Routers } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Router>
        <Routers>
          <Route exect path="/" element={<Navbar/>}/>
        </Routers>
       </Router>
      </header>
    </div>
  );
}

export default App;
