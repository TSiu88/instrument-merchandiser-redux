export default (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_EDIT_FORM':
      return !state;
    default:
      return state;
  }
};