import Topbar from "./components/topbar/topbar";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio"
import Links from "./components/links/links"
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Links/>
      </div>

      
    </div>
  );
}

export default App;
