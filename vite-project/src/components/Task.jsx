import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask } from '../store/taskSlice';

function Task() {
    const [task, setTask] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const tasks = useSelector((state) => state.task);
    const dispatch = useDispatch();

    const handle = (e) => {
        e.preventDefault();
        dispatch(addTask({ id: Math.random(), task }));
        setTask("");
    };

    const handleRemove = (id) => {
        dispatch(removeTask({ id }));
    };

    const filteredTasks = tasks.filter(task => 
        task.task.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <h1>Tasks</h1>
            <input
                type="text"
                placeholder="Search tasks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <form onSubmit={handle}>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button type="submit">Add Task</button>
            </form>

            <ul>
                {filteredTasks.map((task) => (
                    <li key={task.id}>
                        {task.task}
                        <button onClick={() => handleRemove(task.id)}>Remove task</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Task;