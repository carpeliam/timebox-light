import React from 'react';
import moment from 'moment';
import 'moment-duration-format';

export default class Box extends React.Component {
  formattedTime() {
    return moment.duration(this.props.duration).format('h:mm:ss', { trim: false });
  }

  handlePause() {
    this.props.onStart();
  }


  render() {
    const pauseState = this.props.paused ? 'Start' : 'Pause';
    return (
      <div>
        {this.props.name} {this.formattedTime()}
        <button onClick={this.handlePause.bind(this)}>{pauseState}</button>
      </div>
    );
  }
}
