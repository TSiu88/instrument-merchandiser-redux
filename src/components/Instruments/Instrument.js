import React from "react";
import PropTypes from "prop-types";

function Instrument(props) {
  const imageStyle = {
    width: "200px",
    height: "200px",
  };

  const inStockStyle = {
    width: "300px",
    // height: "300px",
  };

  const outOfStockStyle = {
    width: "300px",
    opacity: ".5",
    // height: "300px",
  };

  let cardStyle;

  if (props.quantity === 0) {
    cardStyle = outOfStockStyle;
  } else {
    cardStyle = inStockStyle;
  }

  return (
    <React.Fragment>
      <div style={cardStyle}>
        <img style={imageStyle} className="" src={props.image} />
        <div className="">
          <p>Type: {props.type}</p>
          <h5>
            <strong>{props.itemName}</strong>
          </h5>
          <p>{props.description}</p>
          <p>${props.price}</p>
          <p>Quantity: {props.quantity}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

Instrument.propTypes = {
  type: PropTypes.string,
  itemName: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  image: PropTypes.string,
};

export default Instrument;
