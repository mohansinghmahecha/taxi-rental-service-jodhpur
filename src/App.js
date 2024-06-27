
import './App.css';
import MainNevbar from './components/navbar/MainNevbar';
import CustomSlider from './components/slider/CustomSlider';
import SimpleSlider from './components/slider/SimpleSlider';

function App() {
  return (
    <div className='bg-white '>
      <MainNevbar />
      {/* <SimpleSlider /> */}
      <CustomSlider/>
    </div>
  );
}

export default App;
