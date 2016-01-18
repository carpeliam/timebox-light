import React from 'react';
import moment from 'moment';
import 'moment-duration-format';

class Box extends React.Component {
    formattedTime() {
        return moment.duration(this.props.duration).format('h:mm:ss', {trim: false});
    }

    render() {
        return <div>{this.props.name} {this.formattedTime()}</div>;
    }
}

export default Box;
