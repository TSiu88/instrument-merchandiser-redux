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

  const optionA = "Out of stock";
  const optionB = `Items in Stock: ${props.quantity}`;

  const situationOnStock = () => {
    if (props.quantity <= 0) {
      return optionA;
    } else {
      return optionB;
    }
  };

  return (
    <React.Fragment>
      <div style={finalCardStyle} className="card">
        <img
          onClick={() => props.whenInstrumentClicked(props.id)}
          style={imageStyle}
          className=""
          src={props.image}
          alt="Instrument"
        />
        <div className="card-body">
          {/* <p>Category: {props.category}</p> */}
          <div onClick={() => props.whenInstrumentClicked(props.id)}>
            <h5>
              <strong>{props.itemName}</strong>
            </h5>
            <p>
              <em>{props.description}</em>
            </p>
            <p>${props.price}</p>
          </div>
          {/* <p>Items in Stock: {props.quantity}</p> */}
          <p>{situationOnStock()}</p>
          <div className="input-group">
            <div className="input-group-prepend">
              <button
                className="btn btn-secondary"
                onClick={() => props.whenQuantityChanged(props.id, -1)}
              >
                -
              </button>
            </div>
            <label className="input-group-text">{props.quantity}</label>
            <div className="input-group-append">
              <button
                className="btn btn-secondary"
                onClick={() => props.whenQuantityChanged(props.id, 1)}
              >
                +
              </button>
            </div>
          </div>
          {/* <button>Add to Cart</button> */}
        </div>
      </div>
    </React.Fragment>
  );
}

InstrumentTile.propTypes = {
  whenInstrumentClicked: PropTypes.func,
  whenQuantityChanged: PropTypes.func,
  category: PropTypes.string,
  itemName: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  image: PropTypes.string,
  id: PropTypes.string,
  // key: PropTypes.string,
};

export default InstrumentTile;
