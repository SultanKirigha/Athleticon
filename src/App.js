import './App.css';
import Hero from './Components/Hero/Hero';
import StatsSection from './Components/StatsSection/StatsSection';
// import Maintain from './Components/Maintain/Maintain';

function App() {
  return (
    <div className="page-wrapper">
      <Hero />
      <StatsSection />
      {/* <Maintain /> */}
    </div>
  );
}

export default App;
