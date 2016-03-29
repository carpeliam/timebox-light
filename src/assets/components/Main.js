import React from 'react';
import Box from './Box';

class Main extends React.Component {
  constructor() {
    super();
    this.state = { active: false };
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive() {
    this.setState({ active: !this.state.active });
  }

  render() {
    return (
      <div>
        <Box active={this.state.active} onStart={this.toggleActive} />
      </div>
    );
  }
}

export default Main;
