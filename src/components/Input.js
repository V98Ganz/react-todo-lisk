import React, { Component } from 'react';

class Input extends Component {
  state = {
    task: '',
    time: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addToList({ ...this.state });
    this.setState({ task: '', time: '' });
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.id;
    this.setState({ [key]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Task:{' '}
          <input
            type='text'
            id='task'
            onChange={this.handleChange}
            value={this.state.task}
          />
        </label>
        <label>
          Do until{' '}
          <input
            type='date'
            id='time'
            onChange={this.handleChange}
            value={this.state.time}
          />
        </label>
        <button>Just Do It!</button>
      </form>
    );
  }
}

export default Input;
