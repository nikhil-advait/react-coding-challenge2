import React from 'react/addons';


var Comment =  React.createClass({

    getInitialState(){
      return {
          highlight:false,
          displayChildren: false
      }
    },

    mouseOver(){
      this.setState({highlight: true});
    },

    mouseOut(){
        this.setState({highlight: false});
    },

    handleClick(e){
      this.setState({displayChildren: !this.state.displayChildren});
    },

    renderChildren () {
     return React.Children.map(this.props.children, function (child) {
       if (child.type === Comment.type)
         return React.addons.cloneWithProps(child, {
           display: this.state.displayChildren
         })
       else
         return child
     }.bind(this))
   },

  render(){
    const {name} = this.props;
    const display = this.props.display;
    const highlight = this.state.highlight;
    const date = new Date(this.props.date).toDateString();
    return (
      <div className={'comment'  + (display ? '' : ' hidden')}>
        <span className='user'> {name +' -- ' + date}</span>
        <div className={(highlight ? ' highlight':'')}
          onMouseEnter={this.mouseOver} onMouseLeave={this.mouseOut}
          onClick={this.handleClick}>
          {this.props.text}
        </div>
        {this.renderChildren()}
      </div>
    );
  }
});

export default Comment;
