import React, { Component } from 'react';

class DeleteButton extends Component {
  deleteTask = (event) => {
    console.log(event.target);
  };

  render() {
    return <button onClick={deleteTask}>Delete</button>;
  }
}

export default DeleteButton;
