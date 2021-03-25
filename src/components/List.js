const List = (props) => {

    const myList = props.todoTask;
    console.log(myList)
    return (
        <ul>
            {myList.map((task) => {
                return (<li key={task.task}>
                    <p>Task: {task.task}</p>
                    <p>Do until: {task.time}</p>
                </li>)
            })}
        </ul>
    )
}

export default List