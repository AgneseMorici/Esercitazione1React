import './App.css';
import { searchMovies } from './api/searchMovies';
import {FormRicerca} from './components/FormRicerca/FormRicerca';
import {Results} from './components/Results/Results';
import {useState} from "react";




function App() {
  const [results, setResults] = useState(searchMovies());
  const handleClick = (type) => {
    setResults(searchMovies(type));
  }
   

  
  return (
    <div className="App">

      <button onClick={handleClick("series")}> Cerca Serie </button>
      <button onClick={handleClick("film")}> Cerca Film </button>

      <FormRicerca/>
      <Results pages={results.pages}
      currentPage={results.currentPage} movie={results.movie} />
       
    </div>
  );
  }

export default App;

  
