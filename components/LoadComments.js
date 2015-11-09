import React from 'react';


export default React.createClass({
  render: function(){
    return (
      <div>
        <button onClick={this.props.handleClick}>Load Comments</button>
      </div>
    );
  }
});
