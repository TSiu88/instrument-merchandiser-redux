import React from "react";
import Instrument from "./Instrument";
import PropTypes from "prop-types";

function InstrumentsList(props) {
  const instrumentsStyle = {
    marginLeft: "50px",
    marginRight: "50px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  };

  return (
    <React.Fragment>
      <div style={instrumentsStyle}>
        {props.instrumentList.map((instrument, index) => (
          <Instrument
            image={instrument.image}
            type={instrument.type}
            itemName={instrument.itemName}
            description={instrument.description}
            price={instrument.price}
            quantity={instrument.quantity}
            key={index}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

InstrumentsList.propTypes = {
  instrumentList: PropTypes.array,
};

export default InstrumentsList;
