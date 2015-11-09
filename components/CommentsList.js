import React from 'react';
import Comment from './Comment.js';


export default React.createClass({
  render: function(){
    var comments = this.props.comments;

    function getCommentEl(comment, display){
      var name = comment.user.firstName + '  ' + comment.user.lastName;
      var date = comment.date;
      return (
        <Comment text={comment.text} name={name} date={date} display={display}>
          {comment.children.length ? comment.children.map(function(comm){ return getCommentEl(comm, false);}) : null}
        </Comment>
      );
    };

    var commentsArray = comments.map(function(el){
      return getCommentEl(el, true);
    });


    return (
      <div className='comment-list'>
        {commentsArray}
      </div>
    );
  }
});
