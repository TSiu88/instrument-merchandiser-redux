import React from "react";
import PropTypes from "prop-types";

function InstrumentDetail(props) {
  const { instrument, onClickingDelete, onClickingEdit } = props;

  const imageStyle = {
    width: "400px",
    margin: 40,
  };

  const detailsStyle = {
    textAlign: "center",
  };

  return (
    <React.Fragment>
      <div style={detailsStyle}>
        <h1>{instrument.itemName}</h1>
        <img style={imageStyle} src={instrument.image} />
        <h4>Type of Instrument: {instrument.type}</h4>
        <p>SKU#: {instrument.id}</p>
        <p>Description: {instrument.description}</p>
        <p>Price: ${instrument.price}</p>
        <p>Quantity in Stock: {instrument.quantity}</p>
        <div className="btn-group">
          <button
            className="btn btn-light"
            onClick={() => onClickingEdit(instrument.id)}
          >
            Edit Instrument
          </button>
          <button
            className="btn btn-light"
            onClick={() => onClickingDelete(instrument.id)}
          >
            Remove Instrument
          </button>
        </div>
        <hr />
      </div>
    </React.Fragment>
  );
}

InstrumentDetail.propTypes = {
  instrument: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default InstrumentDetail;
