import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className; // white space needed after card
    return (
        <div className={classes}>{props.children}</div>
    )
}


export default Card;