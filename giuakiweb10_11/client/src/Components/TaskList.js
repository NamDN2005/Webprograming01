import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';

function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const res = await axios.get('http://localhost:5000/api/tasks');
        setTasks(res.data);
    };

    return (
        <div>
            {tasks.map(task => (
                <TaskItem key={task._id} task={task} fetchTasks={fetchTasks} />
            ))}
        </div>
    );
}

export default TaskList;
