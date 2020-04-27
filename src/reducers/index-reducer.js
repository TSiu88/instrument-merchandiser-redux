import addFormVisibleReducer from './add-form-visible-reducer';
import editFormVisibleReducer from './edit-form-visible-reducer';
import instrumentListReducer from './instrument-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterInstrumentList: instrumentListReducer,
  addFormVisible: addFormVisibleReducer,
  editFormVisible: editFormVisibleReducer
});

export default rootReducer;