import { combineReducers } from 'redux';
import fuelSavingsAppState from './fuelSavings';
import mainFilter from './mainFilter';

const rootReducer = combineReducers({
  mainFilter,
  fuelSavingsAppState
});

export default rootReducer;
