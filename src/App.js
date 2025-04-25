import './App.css';
import Hero from './Components/Hero/Hero';
import StatsSection from './Components/StatsSection/StatsSection';
import MaintainSection from './Components/Maintain/Maintain';
import ObjectivesSection from './Components/Objective/ObjectivesSection';
import InsightsSection from './Components/Insight/InsightsSection';

function App() {
  return (
    <div className="page-wrapper">
      <Hero />
      <StatsSection />
      <MaintainSection />
      <ObjectivesSection/>
      <InsightsSection/>
    </div>
  );
}

export default App;
