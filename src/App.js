import Featured from './components/Featured';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Highlight from './components/Highlight';
import Navbar from './components/Navbar';
import PopularSales from './components/PopularSales';
import Stories from './components/Stories';
import TopRatedSales from './components/TopRatedSales';
import { footerAPI, heroapi, highlight, popularsales, sneaker, story, toprateslaes } from './data/data';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar  />
      <Hero heroapi={heroapi} />
      <PopularSales popularsales={popularsales} />
      <Highlight highlight={highlight} />
      <TopRatedSales toprateslaes={toprateslaes} />
      <Featured sneaker={sneaker} />
      <Stories story={story} />
      <Footer footerAPI={footerAPI} />
    </div>
  );
}

export default App;
