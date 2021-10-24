import './Movie.css';

export const Movie =(props) => {
    return(
        <div className="Movie">
            <div className="Text2">
                <p> Titolo: {props.displayMovie.title}</p>
                <p> Description: {props.displayMovie.descriprion}</p>

                
            </div>
           
        </div>
    );
}