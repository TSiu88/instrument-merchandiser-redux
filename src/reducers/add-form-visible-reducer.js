export default (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD_FORM':
      return !state;
    default:
      return state;
  }
};