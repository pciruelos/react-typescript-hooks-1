import { AiOutlinePlus } from "react-icons/ai";
import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "../interfaces/Task";


interface Props {
    newAddTask: (task: Task) => void;
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

const TaskForm = ({newAddTask}) => {

    const [task, setTask] = useState({
        title: "",
        description: "",
    });

    const handleInputChange = ({
        target: { name, value },
    }: HandleInputChange) => {
        setTask({ ...task, [name]: value });
    };

    const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
     }

    return (
        <div className="card card-body bg-secondary text dark">
            <h1>add task</h1>
            <form onSubmit={handleNewTask}>
                <input
                    type="text"
                    placeholder="write a title"
                    name="title"
                    className="form-control mb-3 rounden-0 shadow--none border-0"
                    onChange={handleInputChange}
                />
                <textarea
                    name="description"
                    rows={2}
                    className="form-control mb-3 shadow-none border-0"
                    placeholder="description"
                    onChange={handleInputChange}
                ></textarea>
                <div className="d-grid gap-2">
                    <button className="btn btn-info btn-sm">
                        SAVE
                        <AiOutlinePlus />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TaskForm;
