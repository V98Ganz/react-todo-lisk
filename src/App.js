import React from 'react';
import Header from './components/Header';
import List from './components/List';
import Input from './components/Input';

class App extends React.Component {
  state = {
    todoTask: [
      {
        task: 'JobHunting',
        time: '2021-04-01',
      },
      {
        task: 'Read',
        time: '2021-05-20',
      },
    ],
  };

  addToList = (newTask) => {
    this.setState((currState) => {
      const currentList = [...currState.todoTask];
      currentList.push(newTask);
      currentList.sort((a, b) => {
        return a.time > b.time ? 1 : -1;
      });

      return { todoTask: currentList };
    });
  };

  deleteTask = (taskName) => {
    this.setState((currState) => {
      const newArray = [...currState.todoTask];
      const targetName = taskName.target.parentElement.id;
      for (let task of newArray) {
        if (targetName === task.task) {
          const thisIndex = newArray.indexOf(task);

          newArray.splice(thisIndex, 1);

          // do the splice
        }
      }

      return { todoTask: newArray };
    });
  };

  render() {
    return (
      <div>
        <Header class='header' />
        <Input addToList={this.addToList} />
        <List todoTask={this.state.todoTask} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;
