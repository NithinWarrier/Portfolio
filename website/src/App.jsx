import './App.scss';
import Home from './Home';
import Topbar from './Topbar';
import About from './About';
import Works from './Works';

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Home />
        <About />
        <Works />
      </div>
    </div>
  );
}

export default App;

