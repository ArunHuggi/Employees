import { combineReducers } from 'redux';
import {LOGOUT} from '../actions/types'
import auth from './auth'
import profile from './profile'

const appReducer = combineReducers({

    auth,
    profile
})


const rootReducer = (state, action) => {
    if (action.type === LOGOUT) {
      state = undefined;
    }
    return appReducer(state, action);
  };
  
  export default rootReducer;