// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from './store/store';
import HeroSection from "./components/HeroSection/HeroSection";
import MainContent from "./components/MainContent/MainContent";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";
import TopBar from "./components/TopBar/TopBar";

const App = () => {
  return (
    <>
      <div className="appContainer">
        <TopBar/>
        <HeroSection />
        <MainContent/>
        <NavBar />
      </div>
    </>
  );
};

export default App;
