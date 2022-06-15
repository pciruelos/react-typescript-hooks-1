import { Task } from "../interfaces/Task"

interface Props {
    task: Task;
}

const TaskCard = ({task}: Props) => {
  return (
    <div className="card card-body bg-secondary raounded-0">
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <p>{task.id}</p>
            <button className="btn btn-danger">
                Delete
            </button>
    </div>
  )
}

export default TaskCard