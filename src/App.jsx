import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import './MediaQuery.css';
import FullFooter from './pages/footer/FullFooter';

import Home from './pages/home/FullHomePage';

function App() {
  return (
    <>
      <Home />
      <FullFooter/>
    </>
  );
}

export default App;
