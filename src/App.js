import './App.css';
import About from './components/About';
import Bigimg from './components/Bigimg';
import Cards from './components/Cards';
import Endone from './components/Endone';
import Gify from './components/Gify';
import Home from './components/Home';
import MoreAbout from './components/MoreAbout';
import Navbar from './components/Navbar';
import Team from './components/Team';
import Endtwo from './components/Endtwo';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <MoreAbout/>
    <Team/>
    <Gify/>
    <Cards/>
    <Bigimg/>
    <Endone/>
    <Endtwo/>
    </>
  );
}

export default App;
