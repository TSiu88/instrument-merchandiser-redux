import editFormVisibleReducer from '../../reducers/edit-form-visible-reducer';

describe("editFormVisibleReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(editFormVisibleReducer(false, { type: null })).toEqual(false);
  });

  test('Should toggle add form visibility state to true', () => {
    expect(editFormVisibleReducer(false, { type: 'TOGGLE_EDIT_FORM' })).toEqual(true);
  });
});