
import './App.css';
import Intro from './components/introduction/Intro';
import MainNevbar from './components/navbar/MainNevbar';
import OurPackages from './components/our-packages/OurPackages';

import SlidingImage from './components/slider/SlidingImage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className='bg-white '>
      <Router>
      <MainNevbar />
      <SlidingImage />
      <Intro />
      <OurPackages/>

      </Router>
      

    </div>
  );
}

export default App;
