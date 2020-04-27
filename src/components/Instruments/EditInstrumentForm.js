import React from "react";
import PropTypes from "prop-types";

function EditInstrumentForm(props) {
  const { instrument } = props;
  const formStyle = {
    width: "300px",
  };

  function handleEditInstrumentFormSubmission(event) {
    event.preventDefault();
    props.onEditInstrument({
      id: props.instrument.id,
      category: event.target.category.value,
      itemName: event.target.itemName.value,
      description: event.target.description.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      image: event.target.image.value,
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleEditInstrumentFormSubmission}>
        <div className="form-group">
          <label htmlFor="category">
            Category:
            <input
              style={formStyle}
              className="form-control"
              type="text"
              name="category"
              defaultValue={instrument.category}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="itemName">
            Name:
            <input
              style={formStyle}
              className="form-control"
              type="text"
              name="itemName"
              defaultValue={instrument.itemName}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="description">
            Description:
            <textarea
              style={formStyle}
              className="form-control"
              type="text"
              name="description"
              defaultValue={instrument.description}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="price">
            Price:
            <input
              style={formStyle}
              className="form-control"
              type="number"
              step="0.01"
              name="price"
              min={0}
              defaultValue={instrument.price}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="quantity">
            Quantity:
            <input
              style={formStyle}
              className="form-control"
              type="number"
              name="quantity"
              defaultValue={instrument.quantity}
              min={0}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="image">
            Image URL:
            <input
              style={formStyle}
              className="form-control"
              type="text"
              name="image"
              defaultValue={instrument.image}
            />
          </label>
        </div>
        <button className="btn btn-light" type="submit">
          Edit Instrument
        </button>
      </form>
    </React.Fragment>
  );
}

EditInstrumentForm.propTypes = {
  instrument: PropTypes.object,
  onEditInstrument: PropTypes.func,
};

export default EditInstrumentForm;
