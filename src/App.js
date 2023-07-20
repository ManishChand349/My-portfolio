import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route , Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Router>
        <Routes>
          <Route exect path="/" element={<Navbar/>}/>
        </Routes>
       </Router>
      </header>
    </div>
  );
}

export default App;
