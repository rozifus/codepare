import {SET_MAIN_FILTER} from '../constants/actionTypes';
import objectAssign from 'object-assign';

const initialState = {
  mainFilter: ""
};

export default function fuelSavingsAppState(state = initialState, action) {
  switch (action.type) {
    case SET_MAIN_FILTER:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      return objectAssign({}, state, { mainFilter: action.data });

    default:
      return state;
  }
}
