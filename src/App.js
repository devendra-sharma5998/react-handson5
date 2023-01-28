// import logo from './logo.svg';
// import { PureComponent } from 'react';
import { PureComponent } from './Components/PureComponent';
import './App.css';
import Hover from './Components/Hover';
// import ClickCount from './Components/ClickCount';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <div className='box'>
        <Hover/>

        </div>
    <div className='box'>
        <PureComponent/>
        </div>
        {/* <ClickCount/> */}
      </div>
  
    </div>
  );
}

export default App;
