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


function App() {
  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="footer" element={<FooterSecondList />} />

          </Route>
        </Routes>

      </BrowserRouter>
      {/* */}

    </>
  );
}

export default App;
