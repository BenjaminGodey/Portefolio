// == Import Components
import Header from "../Header";
import Homepage from "../Homepage";
import Nav from "../Nav";
import Timeline from "../Timeline";
import Projects from "../Projects";
import Contact from "../Contact";

// == Import Styles
import "./App.css";

// == Component
function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Homepage />
      <Timeline />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
