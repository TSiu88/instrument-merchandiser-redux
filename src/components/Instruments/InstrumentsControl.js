import React from "react";
import Instrument from "./Instrument";
import InstrumentsList from "./InstrumentsList";
import NewInstrumentForm from "./NewInstrumentForm";
import InstrumentDetails from "./InstrumentDetails";
import { v4 } from "uuid";

const masterInstrumentList = [
  {
    type: "Guitar",
    itemName: "The Guitarrro",
    sku: v4(),
    description: "hard-coded guitar",
    price: 199.99,
    quantity: 3,
    image:
      "https://images.reverb.com/image/upload/s--hCvA1Gix--/f_auto,t_large/v1559759198/bghge6q0jidiwxumevwe.png",
  },
  {
    type: "Piano",
    itemName: "El Piano",
    description: "hard-coded piano",
    price: 899.99,
    quantity: 0,
    image:
      "https://kawaius.com/wp-content/uploads/2018/04/Kawai-Novus-NV10.jpg",
  },
  {
    type: "Saxophone",
    itemName: "The In-Stocksophone",
    description: "this is an example of an in-stock item",
    price: 699.99,
    quantity: 8,
    image:
      "https://cdn.shoplightspeed.com/shops/612125/files/5871002/image.jpg",
  },
  {
    type: "Piano",
    itemName: "El Piano Dos",
    description: "hard-coded piano",
    price: 899.99,
    quantity: 1,
    image:
      "https://kawaius.com/wp-content/uploads/2018/04/Kawai-Novus-NV10.jpg",
  },
  {
    type: "Guitar",
    itemName: "The Guitarrito",
    sku: v4(),
    description: "hard-coded guitar",
    price: 199.99,
    quantity: 3,
    image:
      "https://images.reverb.com/image/upload/s--hCvA1Gix--/f_auto,t_large/v1559759198/bghge6q0jidiwxumevwe.png",
  },
  {
    type: "Saxophone",
    itemName: "The Out-of-Stocksophone",
    description: "this is an example of an out-of-stock item",
    price: 9000.99,
    quantity: 0,
    image:
      "https://cdn.shoplightspeed.com/shops/612125/files/5871002/image.jpg",
  },
];

const controlStyle = {
  marginBottom: 40,
  //  textAlign: "center",
};

const buttonStyle = { contentAlign: "center" };

class InstrumentsControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterInstrumentList: masterInstrumentList,
      selectedInstrument: null,
      formVisibleOnPage: false,
    };
  }

  handleToggleFormVisibility = () => {
    this.setState((prevState) => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  };

  handleAddingNewInstrumentToList = (newInstrument) => {
    const newMasterInstrumentList = this.state.masterInstrumentList.concat(
      newInstrument
    );
    this.setState({ masterInstrumentList: newMasterInstrumentList });
  };

  setVisibility = () => {
    if (this.state.formVisibleOnPage) {
      return {
        component: (
          <NewInstrumentForm
            onAddInstrument={this.handleAddingNewInstrumentToList}
          />
        ),
        buttonText: "Return to Instruments List",
      };
    } else {
      return {
        component: <InstrumentsList instrumentList={masterInstrumentList} />,
        buttonText: "Add Instrument",
      };
    }
  };

  render() {
    // let currentlyVisibleState = null;
    const currentlyVisibleState = this.setVisibility();
    return (
      <React.Fragment>
        <div style={controlStyle}>
          <p>**DEV: This is the instrument control panel**</p>
          <div style={buttonStyle} className="btn-group">
            <button
              className="btn btn-light"
              onClick={this.handleToggleFormVisibility}
            >
              {currentlyVisibleState.buttonText}
            </button>
          </div>
          {currentlyVisibleState.component}
        </div>
      </React.Fragment>
    );
  }
}

export default InstrumentsControl;
