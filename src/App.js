import "./App.css";
import {
  AboutMe,
  Contact,
  Landing,
  Navbar,
  Portfolio,
  Technologies,
} from "./screens";

// svgrepo.com

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <AboutMe />
      <Technologies />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
