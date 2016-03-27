import React from 'react';
class Box extends React.Component {
  render() {
    const boxName = this.props.name;
    const buttonContent = this.props.active ? 'Stop' : 'Start';
    return (
      <div>
        {boxName}
        <button>{buttonContent}</button>
      </div>
    );
  }
}
Box.propTypes = {
  name: React.PropTypes.string,
  active: React.PropTypes.bool,
};

export default Box;
