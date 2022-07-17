import FirstSection from 'components/FirstSection';
import FourthSection from 'components/FourthSection';
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
    </div>
  );
}

export default App;
