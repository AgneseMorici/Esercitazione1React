
import './App.css';
import {FormRicerca} from './components/FormRicerca/FormRicerca';
import {Results} from './components/Results/Results';
import {Movie} from './components/Movie/Movie';
import {Pages} from './components/Pages/Pages';




function App() {
  return (
    <div className="App">

      <FormRicerca/>
      <Results/>
      <Movie/>
      <Pages/>    
    </div>
  );
}

export default App;


