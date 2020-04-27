import addFormVisibleReducer from '../../reducers/add-form-visible-reducer';

describe("addFormVisibleReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(addFormVisibleReducer(false, { type: null })).toEqual(false);
  });

  test('Should toggle add form visibility state to true', () => {
    expect(addFormVisibleReducer(false, { type: 'TOGGLE_ADD_FORM' })).toEqual(true);
  });
});