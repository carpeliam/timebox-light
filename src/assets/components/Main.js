import React from 'react';
import Box from './Box';

export default class Main extends React.Component {
  constructor() {
    super();
    this.toggleActive = this.toggleActive.bind(this);
    this.state = { name: 'I am a box', duration: 0, lastCheckedTime: undefined, paused: true };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  startTimer() {
    this.intervalID = setInterval(this.incrementDurations.bind(this), 100);
  }

  toggleActive() {
    this.setState({ paused: !this.state.paused });
  }

  incrementDurations() {
    const now = Date.now();
    let duration = this.state.duration;
    if (!this.state.paused) {
      const lastCheckedTime = this.state.lastCheckedTime || now;
      const elapsed = now - lastCheckedTime;
      duration += elapsed;
    }
    this.setState({ duration, lastCheckedTime: now });
  }

  render() {
    return (
      <div>
        <Box name={this.state.name} duration={this.state.duration}
          paused={this.state.paused}
          onStart={this.toggleActive}
        />
      </div>
    );
  }
}
