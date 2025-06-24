import "./App.css";
import {Hero} from "./components/Hero/Hero.jsx";
import {Director} from "./components/Director/Director.jsx";
import {Advantages} from "./components/Advantages/Advantages.jsx";
import {Experts} from "./components/Experts/Experts.jsx";
import { Companies } from "./components/Companies/Companies.jsx";
import { Reviews } from "./components/Reviews/Reviews.jsx";

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Director />
      <Advantages />
      <Experts />
      <Companies />
      <Reviews />
    </div>
  );
}

export default App;
