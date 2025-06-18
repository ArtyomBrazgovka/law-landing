import "./App.css"

import { Hero } from "./components/Hero/Hero.jsx";
import { Director } from "./components/Director/Director.jsx";
import { Advantages } from "./components/Advantages/Advantages.jsx";

function App() {
  return (
    <div className="app-container">
      <Hero/>
      <Director/>
      <Advantages/>
    </div>
    
  );
}

export default App;

