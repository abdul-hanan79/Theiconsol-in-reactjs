import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import './MediaQuery.css';
import FullFooter from './pages/footer/FullFooter';

import HomePage from './pages/home/HomePage';
import NotFound from './pages/NotFound';
// import Navbar from "./components/Navbar"
import Layout from './components/Layout';
import FooterSecondList from './pages/footer/FooterSecondList';
import CommingSoon from './components/CommingSoon';
import AnimationRoutes from './components/AnimationRoutes';

function App() {
  return (
    <>


      <BrowserRouter>
        <AnimationRoutes/>

      </BrowserRouter>
      {/* */}

    </>
  );
}

export default App;
