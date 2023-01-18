// Card: containe with rounded corner, drop shadows and elements..
import "./Card.css";

const Card = (props) => {
  const clasess = "card " + props.className;
  return <div className={clasess}>{props.children}</div>;
};

export default Card;
