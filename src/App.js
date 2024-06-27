
import './App.css';
import MainNevbar from './components/navbar/MainNevbar';
import CustomSlider from './components/slider/CustomSlider';
import SimpleSlider from './components/slider/SimpleSlider';
import SlidingImage from './components/slider/SlidingImage';

function App() {
  return (
    <div className='bg-white '>
      <MainNevbar />
      {/* <SimpleSlider /> */}
      {/* <CustomSlider/> */}
      <SlidingImage/>
    </div>
  );
}

export default App;
