import rootReducer from "../../reducers/index-reducer";
import { v4 } from "uuid";
import { createStore } from "redux";
import addFormVisibleReducer from "../../reducers/add-form-visible-reducer";
import editFormVisibleReducer from "../../reducers/edit-form-visible-reducer";
import instrumentListReducer from "../../reducers/instrument-list-reducer";

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterInstrumentList: {},
      addFormVisible: false,
      editFormVisible: false
    });
  });

  test('Check that initial state of addFormVisibleReducer matches root reducer', () => {
    expect(store.getState().addFormVisible).toEqual(addFormVisibleReducer(undefined, { type: null } ));
  });

  test('Check that initial state of editFormVisibleReducer matches root reducer', () => {
    expect(store.getState().editFormVisible).toEqual(editFormVisibleReducer(undefined, { type: null } ));
  });

  test('Check that state of instrumentListReducer after passing action matches root reducer', () => {
    const firstId = v4();
    const action = {
      type: 'ADD_OR_UPDATE_INSTRUMENT',
      id: firstId,
      category: "Piano",
      itemName: "El Piano",
      description: "hard-coded piano",
      price: 899.99,
      quantity: 0,
      image:
        "https://kawaius.com/wp-content/uploads/2018/04/Kawai-Novus-NV10.jpg",
    }
    store.dispatch(action);
    expect(store.getState().masterInstrumentList).toEqual(instrumentListReducer(undefined, action));
  });

  test('Check that state of addFormVisibleReducer after toggle matches root reducer', () => {
    const action = {
      type: 'TOGGLE_ADD_FORM'
    }
    store.dispatch(action);
    expect(store.getState().addFormVisible).toEqual(addFormVisibleReducer(undefined, action));
  });

  test('Check that state of editFormVisibleReducer after toggle matches root reducer', () => {
    const action = {
      type: 'TOGGLE_EDIT_FORM'
    }
    store.dispatch(action);
    expect(store.getState().editFormVisible).toEqual(editFormVisibleReducer(undefined, action));
  });
});