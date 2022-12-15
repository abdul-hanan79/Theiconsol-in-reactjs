import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Cardb from './components/smComponents/Cardb';
import Btn from './components/smComponents/Button';
// import Cards from './components/smComponents/Card';
import image1 from './assests/image1.png';
import image2 from './assests/b.png';
import image3 from './assests/c.png';
import Cardc from './components/smComponents/Cardc';
import Cardd from './components/smComponents/Cardd';
import Cards from './components/smComponents/Card';
import Carde from './components/smComponents/Carde';

import ArrowButton from './components/smComponents/ArrowButton';

function App() {
  return (
    <div className="App">
      <Btn tittle=" hello" color="white" size="lg" />
      {/* <div className="container"  >
        <div className="row">
          <div className='col-sm-6 col-md-1'>
            <Cards title="" text="" bgcolor="grey"/>
          </div>
          <div className='col-sm-6 col-md-1'>
            <Cards title="" text="" bgcolor="grey"/>
          </div><div className='col-sm-6 col-md-1'>
            <Cards title="" text="" bgcolor="blue"/>
          </div><div className='col-sm-6 col-md-1'>
            <Cards title="" text="" bgcolor="red"/>
          </div>
        </div>
       </div> */}

      <div className="container"  >
        <div className="row">
          <div className='col-sm-6 col-md-4 '>
            <Carde title="Sketch" image='https://cdna.iconscout.com/img/mac-app.1aa449a.svg' />
          </div>
          {/* <div className='col-sm-6 col-md-1 '>
            <Cardd title=" CARDC  " text="lorem" image={image2} />
          </div>
          <div className='col-sm-6 col-md-1 '>
            <Cardd title=" google  " text="lorem" image={image3} />
          </div>
          <div className='col-sm-6 col-md-1 '>
            <Cardd title=" google  " text="lorem" image={image3} />
          </div>
          <div className='col-sm-6 col-md-1 '>
            <Cardd title=" google  " text="lorem" image={image3} />
          </div>
          <div className='col-sm-6 col-md-1 '>
            <Cardd title=" google  " text="lorem" image={image3} />
          </div> <div className='col-sm-6 col-md-1 '>
            <Cardd title=" google  " text="lorem" image={image3} />
          </div> <div className='col-sm-6 col-md-1 '>
            <Cardd title=" google  " text="lorem" image={image3} />
          </div> */}
        </div>
      </div>
      {/* <ArrowButton size='lg'/> */}
    </div>
  );
}

export default App;
