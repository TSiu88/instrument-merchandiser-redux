import React from "react";
import PropTypes from "prop-types";

function InstrumentTile(props) {
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

  function handleQuantityDecrease(event) {
    event.preventDefault();
    // props.onQuantityDecrease({quantity: event.target.})
  }
  function handleQuantityIncrease(event) {
    event.preventDefault();
  }

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
          <p>
            ${props.price} SKU#{props.key}
          </p>
          <p>Items in Stock: {props.quantity}</p>
          <div className="input-group">
            <div className="input-group-prepend">
              <button
                className="btn btn-secondary"
                onClick={handleQuantityDecrease}
              >
                -
              </button>
            </div>
            <label className="input-group-text">{props.quantity}</label>
            <div className="input-group-append">
              <button
                className="btn btn-secondary"
                onClick={handleQuantityIncrease}
              >
                +
              </button>
            </div>
          </div>
          <button>Add to Cart</button>
        </div>
      </div>
    </React.Fragment>
  );
}

InstrumentTile.propTypes = {
  type: PropTypes.string,
  itemName: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  image: PropTypes.string,
  key: PropTypes.string,
};

export default InstrumentTile;
