import React from "react";
import PropTypes from "prop-types";

function EditInstrumentForm(props) {
  const { ticket } = props;
  const formStyle = {
    width: "300px",
  };

  function handleEditInstrumentFormSubmission(event) {
    event.preventDefault();
    props.onEditInstrument({
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
          <label htmlFor="type">
            Type:
            <input
              style={formStyle}
              className="form-control"
              type="text"
              name="type"
              defaultValue={ticket.type}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="itemName">
            Name:
            <input
              style={formStyle}
              style={formStyle}
              className="form-control"
              type="text"
              name="itemName"
              defaultValue={ticket.itemName}
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
              defaultValue={ticket.description}
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
              defaultValue={ticket.price}
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
              defaultValue={ticket.quantity}
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
              defaultValue={ticket.image}
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
  onEditInstrument: PropTypes.func,
};

export default EditInstrumentForm;
