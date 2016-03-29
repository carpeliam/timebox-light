import React from 'react';
class Box extends React.Component {
  render() {
    const boxName = this.props.name;
    const buttonContent = this.props.active ? 'Stop' : 'Start';
    return (
      <div>
        {boxName}
        <button onClick={this.props.onStart}>{buttonContent}</button>
      </div>
    );
  }
}
Box.propTypes = {
  name: React.PropTypes.string,
  active: React.PropTypes.bool,
  onStart: React.PropTypes.func,
};
Box.defaultProps = {
  active: false,
};
export default Box;
