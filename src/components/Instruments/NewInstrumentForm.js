import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewInstrumentForm(props) {
  const formStyle = {
    width: "300px",
  };

  function handleNewInstrumentFormSubmission(event) {
    event.preventDefault();
    console.log({
      type: event.target.type.value,
      itemName: event.target.itemName.value,
      description: event.target.description.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      image: event.target.image.value,
    });
    props.onAddInstrument({
      type: event.target.type.value,
      itemName: event.target.itemName.value,
      description: event.target.description.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      image: event.target.image.value,
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewInstrumentFormSubmission}>
        <div className="form-group">
          <label for="type">
            Type:
            <input
              style={formStyle}
              className="form-control"
              type="text"
              name="type"
              placeholder="Guitar, Piano, etc."
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label for="itemName">
            Name:
            <input
              style={formStyle}
              style={formStyle}
              className="form-control"
              type="text"
              name="itemName"
              placeholder="The Smooth Jazzophone"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label for="description">
            Description:
            <textarea
              style={formStyle}
              className="form-control"
              type="text"
              name="description"
              placeholder="Smooth jazz will be deployed, in three...two...one..."
            />
          </label>
        </div>
        <div className="form-group">
          <label for="price">
            Price:
            <input
              style={formStyle}
              className="form-control"
              type="number"
              step="0.01"
              name="price"
              placeholder="300.00"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label for="quantity">
            Quantity:
            <input
              style={formStyle}
              className="form-control"
              type="number"
              name="quantity"
              placeholder="5"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label for="image">
            Image URL:
            <input
              style={formStyle}
              className="form-control"
              type="text"
              name="image"
              placeholder="http://image.com/picture-url.jpg"
            />
          </label>
        </div>
        <button className="btn btn-light" type="submit">
          Add Instrument
        </button>
      </form>
    </React.Fragment>
  );
}

NewInstrumentForm.propTypes = {
  onAddInstrument: PropTypes.func,
};

export default NewInstrumentForm;
