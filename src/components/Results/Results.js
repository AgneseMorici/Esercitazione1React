
import * as React from "react";
import { Movie } from "./Movie/Movie";
import { Pages } from "./Pages/Pages";



export const Results = (props) => {
    const movie = props.movie;
    
    const movieList = movie.map(
    (movie) => <Movie displayMovie=
    {movie}/>)






    return <div className="Results">
        <div className="Text4">
            Results
            {movieList}


            <Pages currentPages = {props.currentPage} pages={props.Pages} />
        </div>

    </div>
}