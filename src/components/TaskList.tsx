
import {Task} from '../interfaces/Task'
import TaskCard from './TaskCard'

interface Props{
    tasks:Task[]
}

export default function TaskList({ tasks }: Props) {
  return (
    <>
    {tasks.map((t) => (
        <div className="col-md-3">
            <TaskCard task={t}/>
        </div>
      ))}
    </>
  )
}
