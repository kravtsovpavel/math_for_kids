import './App.css';
import Numbers from './components/Numbers/Numbers';
import Addition from './components/Addition/Addition';
import Difference from './components/Difference/Difference';

function App() {

  return (
    <div className="App">
      <div className='wrapper'>
        <Numbers />
        <Addition />
        <Difference />
      </div>
    </div>
  );
}

export default App;
