import './Pages.css';

export const Pages =(props) => {
    return(
        <div className="Pages">
            <div className="Text3">
                Pages corrente: {props.currentPage};
                Totale Pagine: {props.Pages}
            </div>
           
        </div>
    );
}