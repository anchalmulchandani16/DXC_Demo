import {combineReducers} from 'redux';
import MainReducer from './mainSlice';

const rootReducer = combineReducers({
  mainRoot: MainReducer,
});

export default rootReducer;
