import React from 'react';
import moment from 'moment';
import 'moment-duration-format';

class Box extends React.Component {
    constructor(props) {
        super(props);
    }

    formattedTime() {
        return moment.duration(this.props.duration).format('h:mm:ss', {trim: false});
    }

    handlePause() {
        this.props.onStart()
    }


    render() {
        const pauseState = this.props.paused ? 'Start' : 'Pause';
        return <div>
            {this.props.name} {this.formattedTime()}
            <button onClick={this.handlePause.bind(this)}>{pauseState}</button>
        </div>;
    }
}

export default Box;
