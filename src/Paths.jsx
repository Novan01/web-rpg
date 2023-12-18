import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenu from './Pages/MainMenu/MainMenu';
import AboutPage from './Pages/AboutPage/AboutPage';
import SettingsPage from "./Pages/SettingsPage/SettingsPage";
import WelcomePage  from "./Pages/WelcomePage/WelcomePage";
import CreatePage from "./Pages/CreatePage/CreatePage";
import TestPage from "./Pages/TestPage/TestPage"

function Paths() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/main-menu" element={<MainMenu />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Paths;
