import React from "react";
import InstrumentsList from "./InstrumentsList";
import NewInstrumentForm from "./NewInstrumentForm";

class InstrumentsControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterInstrumentList: [],
    };
  }

  handleAddingNewInstrumentToList = (newInstrument) => {
    const newMasterInstrumentList = this.state.masterInstrumentList.concat(
      newInstrument
    );
    this.setState({ masterInstrumentList: newMasterInstrumentList });
  };

  render() {
    return <React.Fragment></React.Fragment>;
  }
}

export default InstrumentsControl;
