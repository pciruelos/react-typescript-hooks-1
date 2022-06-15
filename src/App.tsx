import "./App.css";
import { useState } from "react";
import { Task } from './interfaces/Task'
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

interface Props {
  title?: string;
}



function App({ title }: Props) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "aprender react",
      description: "estamos aprendiendo tio",
      completed: false,
    },
    {
      id: 2,
      title: "al pedo",
      description: "no estamos haciendo nada",
      completed: true,
    },
  ]);

  const newAddTask = (task: Task) => setTasks([...tasks, task]);

  return (
    <div className="bg-dark" style={{ height: "100vh" }}>

      {/* NAVBAR */}
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/">
            <h1>{title}</h1>
          </a>
        </div>
      </nav>
      {/*FIN NAVBAR*/}

      {/*MAIN*/}
      <main className="container text-center p-4">
        <div className="row">
        <div className="col-md-4">
          <TaskForm newAddTask={newAddTask}/>
        </div>
        <div className="col-md-8">
          <div className="row">
            <TaskList tasks={tasks} />
          </div>
        </div>
        </div>
      </main>
      {/*FIN MAIN*/}

    </div>
  );
}

export default App;
