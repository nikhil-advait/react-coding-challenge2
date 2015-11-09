import fetch from 'isomorphic-fetch';

export const REQUEST_COMMENTS = 'REQUEST_COMMNETS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';


function requestComments() {
  return {
    type: REQUEST_COMMENTS,
  };
}

function receiveComments(json) {
  return {
    type: RECEIVE_COMMENTS,
    comments: json
  };
}

export function fetchComments(reddit) {
  return dispatch => {
    dispatch(requestComments());
    return fetch(`/getComments`)
      .then(response => response.json())
      .then(json => dispatch(receiveComments(json)));
  };
}
