import FifthSection from 'components/FifthSection';
import FirstSection from 'components/FirstSection';
import FourthSection from 'components/FourthSection';
import LastSection from 'components/LastSection';
import SecondSection from 'components/SecondSection';
import ThirdSection from 'components/ThirdSection';
import Header from './components/Header/Header';
import "./styles/main.scss";

function App() {
  return (
    <div>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <LastSection />
    </div>
  );
}

export default App;
