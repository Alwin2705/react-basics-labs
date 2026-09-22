const Task = (props) => {

    let priorityStyle;

    if (props.priority === "high") {
        priorityStyle = {
            color: "red",
            fontWeight: "bold"
        };
    } else if (props.priority === "medium") {
        priorityStyle = {
            color: "orange",
            fontWeight: "bold"
        };
    } else {
        priorityStyle = {
            color: "green",
            fontWeight: "bold"
        };
    }

    return (
        <div
            className="card"
            style={{
                backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'
            }}
        >
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>

            <p style={priorityStyle}>
                Priority: {props.priority}
            </p>

            <button onClick={props.markDone} className="doneButton">
                Done
            </button>

            <button
                className="deleteButton"
                onClick={props.deleteTask}
            >
                Delete
            </button>

        </div>
    );
}

export default Task;
