import './Card.css';

function Card(props) {
    const classes = 'card ' + props.className; // white space needed after card
    return (
        <div className={classes}>{props.children}</div>
    )
}


export default Card;