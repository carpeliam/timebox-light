import React from 'react';
export default class Box extends React.Component {
  render() {
    var boxName = this.props.name;
    var buttonContent = this.props.active ? 'Stop' : 'Start';
    return (
      <div>
        {boxName}
        <button>{buttonContent}</button>
      </div>
    );
  }
}
