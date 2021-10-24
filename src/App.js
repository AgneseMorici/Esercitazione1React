
import { searchMovies } from './api/searchMovies';
import './App.css';
import {FormRicerca} from './components/FormRicerca/FormRicerca';
import {Results} from './components/Results/Results';




function App() {
  const results = {
  
    const: Results = searchMovies(),

  }
  return (
    <div className="App">

      <FormRicerca/>
      <Results pages={results.pages}
      currentPages={results.currentPages} movie={results.movie} />
       
    </div>
  );
}

export default App;


