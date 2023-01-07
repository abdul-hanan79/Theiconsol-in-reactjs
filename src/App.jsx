import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './MediaQuery.css';
import './pages/authentication/Authentication.css'

import AnimationRoutes from './AnimationRoutes';

function App() {
  return (
    <>


      <BrowserRouter>
        <AnimationRoutes />
        
      </BrowserRouter>
      {/* */}

    </>
  );
}

export default App;
