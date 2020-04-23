import React from "react";
import PropTypes from "prop-types";

function InstrumentDetail(props) {
  const { instrument, onClickingDelete } = props;

  const imageStyle = {
    width: "400px",
  };

  const detailsStyle = {
    textAlign: "center",
  };

  return (
    <React.Fragment>
      <div style={detailsStyle}>
        <h1>{instrument.itemName}"</h1>
        <img style={imageStyle} src={instrument.image} />
        <h4>Type of Instrument: {instrument.type}</h4>
        <p>Description: {instrument.description}</p>
        <p>Price: ${instrument.price}</p>
        <p>Quantity in Stock: {instrument.quantity}</p>
        <button onClick={() => onClickingDelete(instrument.id)}>
          Remove Instrument
        </button>
        <hr />
      </div>
    </React.Fragment>
  );
}

InstrumentDetail.propTypes = {
  instrument: PropTypes.object,
  onClickingDelete: PropTypes.func,
};

export default InstrumentDetail;
