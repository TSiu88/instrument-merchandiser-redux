import React from "react";
import InstrumentTile from "./InstrumentTile";
import PropTypes from "prop-types";

function InstrumentsList(props) {
  const instrumentsStyle = {
    marginLeft: "50px",
    marginRight: "50px",
    marginBottom: "100px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    // gridAutoColumns: "minmax(200px, auto)",
    // gridGap: "50px",
  };

  return (
    <React.Fragment>
      <div style={instrumentsStyle}>
        {props.instrumentList.map((instrument) => (
          <InstrumentTile
            whenInstrumentClicked={props.onInstrumentSelect}
            whenQuantityChanged={props.onQuantityChanged}
            image={instrument.image}
            type={instrument.type}
            itemName={instrument.itemName}
            description={instrument.description}
            price={instrument.price}
            quantity={instrument.quantity}
            id={instrument.id}
            key={instrument.id}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

InstrumentsList.propTypes = {
  instrumentList: PropTypes.array,
  onInstrumentSelect: PropTypes.func,
  onQuantityChanged: PropTypes.func,
};

export default InstrumentsList;
