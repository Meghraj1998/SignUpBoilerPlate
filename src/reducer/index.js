import { combineReducers } from 'redux';
import posts from '../reducer/post'
import auth from './auth';

export default combineReducers({
  posts,
  auth,
});
