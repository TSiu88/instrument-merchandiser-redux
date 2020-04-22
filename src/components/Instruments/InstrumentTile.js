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

  // const storeState = (initialState) => {
  //   let currentState = { initialState };
  //   return (stateChangeFunction) => {
  //     const newState = stateChangeFunction(currentState);
  //     currentState = { ...newState };
  //     return newState;
  //   };
  // };

  // const buyQuantityStateChanger = storeState();

  // const changeState = (prop) => {
  //   return (value) => {
  //     return (state) => ({
  //       ...state,
  //       [prop]: (state[prop] || 0) + value,
  //     });
  //   };
  // };

  // const quantityChange = changeState("quantityToBuy");

  // const handleQuantityDecrease = quantityChange(-1);
  // const quantityDefault = quantityChange(0);
  // const handleQuantityIncrease = quantityChange(1);

  // const currentQuantity = () => { return(state) => {state.quantityChange};return({...state})});

  let currentQuantity = 0;

  const setCurrentQuantity = (val) => {
    currentQuantity += val;
  };

  const increaseQuantity = setCurrentQuantity(1);
  const decreaseQuantity = setCurrentQuantity(-1);

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
          <p>Items in Stock: {props.quantity}</p>
          <div className="input-group">
            <div className="input-group-prepend">
              <button
                className="btn btn-sm btn-secondary"
                onClick={decreaseQuantity}
              >
                -
              </button>{" "}
            </div>
            <label className="input-group-text">{currentQuantity}</label>
            <div className="input-group-append">
              <button
                className="btn btn-sm btn-secondary"
                onClick={increaseQuantity}
              >
                +
              </button>{" "}
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
};

export default InstrumentTile;
