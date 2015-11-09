import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {fetchComments} from '../actions';
import LoadComments from '../components/LoadComments.js';
import CommentsList from '../components/CommentsList.js';

const App = React.createClass({

  componentDidMount() {
    this.fetchComments();
  },

  fetchComments(e){
    const {dispatch} = this.props;
    dispatch(fetchComments());
  },

  render() {
    const { isFetching, comments} = this.props;
    return (
      <div>
        <LoadComments handleClick={this.fetchComments}/>
        <br/><br/>
        { !isFetching && comments.length? <CommentsList comments={comments}/> : <span>Loading...</span>}

      </div>
    );
  }
});

function mapStateToProps(state) {
  const {isFetching, comments} = state;
  return {
    isFetching : isFetching || false,
    comments : comments || []
  };
}

export default connect(mapStateToProps)(App);
