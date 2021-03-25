import React from 'react';
import Header from './components/Header';
import List from './components/List';
import Input from './components/Input';

class App extends React.Component {
  state = {
    todoTask: [
      {
        task: 'JobHunting',
        time: '2021-05-20',
      },
      {
        task: 'Read',
        time: '2021-04-01',
      },
    ],
  };

  addToList = (newTask) => {
    this.setState((currState) => {
      return {
        todoTask: [...currState.todoTask, newTask],
      };
    });
  };

  render() {
    return (
      <div>
        <Header class='header' />
        <Input addToList={this.addToList} />
        <List
          todoTask={this.state.todoTask}
          deleteTask={this.state.deleteTask}
        />
      </div>
    );
  }
}

export default App;
