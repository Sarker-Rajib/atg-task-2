import MobileSlider from './Component/MobileSileder/MobileSlider';
import './App.css';
import DeskView from './Component/DeskView/DeskView';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({
  mirror: true,
});

function App() {
  return (
    <>
      <MobileSlider />
      <DeskView />
    </>
  );
}

export default App;
