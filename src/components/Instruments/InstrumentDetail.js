import React from "react";

function InstrumentDetail(props) {
  const { instrument } = props;

  const imageStyle = {
    width: "500px",
  };

  const detailsStyle = {
    textAlign,
  };

  return (
    <React.Fragment>
      <h1>{instrument.itemName}"</h1>
      <img style={imageStyle} src={instrument.image} />
      <h4>Type of Instrument: {instrument.type}</h4>
      <p>Description: {instrument.description}</p>
      <p>Price: ${instrument.price}</p>
      <p>Quantity in Stock: {instrument.quantity}</p>
      <hr />
    </React.Fragment>
  );
}

export default InstrumentDetail;
