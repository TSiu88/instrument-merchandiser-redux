import React from "react";
import PropTypes from "prop-types";

function Instrument(props) {
  const imageStyle = {
    maxWidth: "200px",
  };

  const cardStyle = {
    //width: "300px",
    minWidth: "220px",
    padding: 20,
    margin: 10,
  };

  const outOfStockStyle = {
    opacity: ".5",
  };

  const finalCardStyle =
    props.quantity === 0 ? { ...cardStyle, ...outOfStockStyle } : cardStyle;

  return (
    <React.Fragment>
      <div style={finalCardStyle} className="card">
        <img style={imageStyle} className="" src={props.image} />
        <div className="card-body">
          {/* <p>Type: {props.type}</p> */}
          <h5>
            <strong>{props.itemName}</strong>
          </h5>
          <p>
            <em>{props.description}</em>
          </p>
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
