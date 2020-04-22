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
    props.onQuantityChanged({ quantity: event.target.quantity.value - 1 });
  }
  function handleQuantityIncrease(event) {
    event.preventDefault();
    // props.onQuantityChanged({quantity: event.target.quantity.value +1})
  }

  return (
    <React.Fragment>
      <div style={finalCardStyle} className="card">
        <img
          onClick={() => props.whenInstrumentClicked(props.id)}
          style={imageStyle}
          className=""
          src={props.image}
        />
        <div className="card-body">
          {/* <p>Type: {props.type}</p> */}
          <h5 onClick={() => props.whenInstrumentClicked(props.id)}>
            <strong>{props.itemName}</strong>
          </h5>
          <p>
            <em>{props.description}</em>
          </p>
          <p>
            ${props.price} SKU#{props.id}
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
  whenInstrumentClicked: PropTypes.func,
  type: PropTypes.string,
  itemName: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  image: PropTypes.string,
  id: PropTypes.string,
  key: PropTypes.string,
};

export default InstrumentTile;
