const List = (props) => {
  const myList = props.todoTask;
  console.log(myList);

  const deleteTask = props.deleteTask;

  // handleSubmit = (event) => {
  //   console.log(event.target.id)
  // }

  return (
    <ul>
      {myList.map((task) => {
        return (
          <li key={task.task} className='task-box' id={task.task}>
            <p>Task: {task.task}</p>
            <p>Do until: {task.time}</p>
            <button className='deleteButton' onClick={deleteTask}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
