import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import './MediaQuery.css';
import FullFooter from './pages/footer/FullFooter';

import HomePage from './pages/home/HomePage';

function App() {
  return (
    <>
      <HomePage />
      <FullFooter/>
    </>
  );
}

export default App;
