import React from "react";
import PropTypes from "prop-types";

function EditInstrumentForm(props) {
  const { ticket } = props;
  const formStyle = {
    width: "300px",
  };

  function handleEditInstrumentFormSubmission(event) {
    event.preventDefault();
    props.onAddInstrument({
      id: props.ticket.id,
      type: event.target.type.value,
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
          <label for="type">
            Type:
            <input
              style={formStyle}
              className="form-control"
              type="text"
              name="type"
              value={ticket.type}
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
              value={ticket.name}
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
              value={ticket.description}
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
              value={ticket.price}
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
              value={ticket.quantity}
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
              value={ticket.image}
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
  ticket: PropTypes.object,
  onAddInstrument: PropTypes.func,
};

export default EditInstrumentForm;
