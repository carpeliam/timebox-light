import React from 'react'
import Box from './Box'

class Main extends React.Component {
    constructor() {
        super();
        let lastCheckedTime;
        this.state = {name: 'I am a box', duration: 0, lastCheckedTime: lastCheckedTime, paused: true};
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
        this.setState({paused: !this.state.paused});
    }

    incrementDurations() {
        if (!this.state.paused) {
            const now = new Date().getTime();
            const lastCheckTime = this.state.lastCheckedTime || now;
            const elapsed = now - lastCheckTime;
            const duration = this.state.duration += elapsed;
            this.setState({duration, lastCheckedTime: now})
        }
    }

    render() {
        return <div>
            <Box name={this.state.name} duration={this.state.duration}
                paused={this.state.paused}
                onStart={this.toggleActive.bind(this)}/>
        </div>
    }
}

export default Main
