import React from "react";
import InstrumentsList from "./InstrumentsList";
import NewInstrumentForm from "./NewInstrumentForm";
import EditInstrumentForm from "./EditInstrumentForm";
import InstrumentDetail from "./InstrumentDetail";
import PropTypes from "prop-types";
import { connect } from "react-redux";

/* Styles */
const controlStyle = {
  marginBottom: 40,
};
const buttonStyle = {
  margin: "auto",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

/* Instruments Control */
class InstrumentsControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedInstrument: null,
      // addNewInstrumentFormVisible: false,
      // editInstrumentFormVisible: false,
      quantityChanged: false,
    };
  }

  handleToggleNewInstrumentForm = () => {
    if (this.state.selectedInstrument != null) {
      this.setState(() => ({
        selectedInstrument: null,
        editInstrumentFormVisible: false,
      }));
    }else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_ADD_FORM'
      }
      dispatch(action);
    }
  };

  handleAddingNewInstrumentToList = (newInstrument) => {
    if (newInstrument.image === "") {
      newInstrument.image = "./default-img.jpeg";
    }
    const { dispatch } = this.props;
    const { id, category, itemName, description, price, quantity, image } = newInstrument;
    const action = {
      type: 'ADD_OR_UPDATE_INSTRUMENT',
      id: id,
      category: category,
      itemName: itemName,
      description: description,
      price: price,
      quantity: quantity,
      image: image,
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_ADD_FORM'
    }
    dispatch(action2);
  };

  handleChangingQuantity = (id, newQuantity) => {
    const quantityChanged = this.props.masterInstrumentList[id];
    const { category, itemName, description, price, quantity, image } = quantityChanged;
    const { dispatch } = this.props;
    const action = {
      type: 'ADD_OR_UPDATE_INSTRUMENT',
      id: id,
      category: category,
      itemName: itemName,
      description: description,
      price: price,
      quantity: ((quantity + newQuantity) < 0) ? 0 : (quantity + newQuantity),
      image: image,
    }
    dispatch(action);
    //this.setState({ quantityChanged: quantityChanged });
    //this.setState({ quantityChanged: false });
  };

  handleChangingSelectedInstrument = (id) => {
    const selectedInstrument = this.props.masterInstrumentList[id];
    this.setState({ selectedInstrument: selectedInstrument });
  };

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = {
      type: 'TOGGLE_EDIT_FORM'
    }
    dispatch(action);
  };

  handleEditingInstrument = (editedInstrument) => {
    const { dispatch } = this.props;
    const { id, category, itemName, description, price, quantity, image } = editedInstrument;
    const action = {
      type: 'ADD_OR_UPDATE_INSTRUMENT',
      id: id,
      category: category,
      itemName: itemName,
      description: description,
      price: price,
      quantity: quantity,
      image: image,
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_EDIT_FORM'
    }
    dispatch(action2);
    this.setState({
      editInstrumentFormVisible: false,
      selectedInstrument: null,
    });
  };

  handleDeletingInstrument = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_INSTRUMENT',
      id: id
    }
    dispatch(action);
    this.setState({ selectedInstrument: null });
  };

  setVisibility = () => {
    if (this.props.editInstrumentFormVisible) {
      // UPDATE: Edit instrument form view
      return {
        component: (
          <EditInstrumentForm
            instrument={this.state.selectedInstrument}
            onEditInstrument={this.handleEditingInstrument}
          />
        ),
        buttonText: "Cancel and return to Instruments List",
      };
    } else if (this.state.selectedInstrument != null) {
      // READ ONE: instrument detail view
      // DELETE: Add delete button to detail view
      return {
        component: (
          <InstrumentDetail
            instrument={this.state.selectedInstrument}
            onClickingDelete={this.handleDeletingInstrument}
            onClickingEdit={this.handleEditClick}
          />
        ),
        buttonText: "Return to Instruments List",
      };
    } else if (this.props.addNewInstrumentFormVisible) {
      // CREATE: Add new instrument form view
      return {
        component: (
          <NewInstrumentForm
            onAddInstrument={this.handleAddingNewInstrumentToList}
          />
        ),
        buttonText: "Return to Instruments List",
      };
    } else if (this.state.quantityChanged) {
      // Quantity changing on "index" grid view
      return {
        component: (
          <InstrumentsList
            onQuantityChanged={this.handleChangingQuantity}
            instrumentList={this.props.masterInstrumentList}
          />
        ),
      };
    } else {
      // READ ALL: "index" grid view
      return {
        component: (
          <InstrumentsList
            onInstrumentSelect={this.handleChangingSelectedInstrument}
            onQuantityChanged={this.handleChangingQuantity}
            instrumentList={this.props.masterInstrumentList}
          />
        ),
        buttonText: "Add Instrument",
      };
    }
  };

  render() {
    const currentlyVisibleState = this.setVisibility();
    return (
      <React.Fragment>
        <div style={controlStyle}>
          <div style={buttonStyle} className="btn-group text-center">
            <button
              className="btn btn-light col-2"
              onClick={this.handleToggleNewInstrumentForm}
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

InstrumentsControl.propTypes = {
  masterInstrumentList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterInstrumentList: state.masterInstrumentList,
    addNewInstrumentFormVisible: state.addFormVisible,
    editInstrumentFormVisible: state.editFormVisible
  }
}

InstrumentsControl = connect(mapStateToProps)(InstrumentsControl);

export default InstrumentsControl;
