import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import MainMenu from './Pages/MainMenu';
import AboutPage from './Pages/AboutPage';
import WelcomePage  from "./Pages/WelcomePage";
import PlayGamePage from './Pages/PlayGamePage';
import CreatePage from "./Pages/CreatePage";
import Layout from "../src/Layout";

const Paths = () => {
  return (
    
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <WelcomePage />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />
        <Route
          path="/create"
          element={
            <Layout>
              <CreatePage />
            </Layout>
          }
        />
        <Route
          path="/play"
          element={
            <Layout>
              <PlayGamePage />
            </Layout>
          }
        />
        <Route
          path="/main-menu"
          element={
            <Layout>
              <MainMenu />
            </Layout>
          }
        />
      </Routes>
    </Router>
    
  );
};

export default Paths;
