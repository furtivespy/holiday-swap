import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as reduxFormReducer } from 'redux-form'
import {firebaseReducer} from 'react-redux-firebase'
import tags from './tags'

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  tags,
  routing: routerReducer,
  form: reduxFormReducer,
});

export default rootReducer;
