import './App.css';
import Numbers from './components/Numbers/Numbers';
import Addition from './components/Addition/Addition';
import Subtraction from './components/Subtraction/Subtraction';

function App() {

  return (
    <div className="App">
      <div className='wrapper'>
        <Numbers />
        <Addition />
        <Subtraction />
      </div>
    </div>
  );
}

export default App;
