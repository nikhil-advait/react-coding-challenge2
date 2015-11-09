//import { combineReducers } from 'redux';
import {
  REQUEST_COMMENTS, RECEIVE_COMMENTS
} from '../actions';

const defaultState = {
  isFetching : false,
  comments: []
};

function comments(state = defaultState, action) {
  switch (action.type) {
  case REQUEST_COMMENTS:
    return Object.assign({}, state, {
      isFetching: true,
    });
  case RECEIVE_COMMENTS:
    return Object.assign({}, state, {
      isFetching: false,
      comments: action.comments
    });
  default:
    return state;
  }
}


export default comments;
