import React from 'react';
import TaskList from './Components/TaskList';
import AddTaskForm from './Components/AddTaskForm';

function App() {
    return (
        <div>
            <AddTaskForm />
            <TaskList />
        </div>
    );
}

export default App;
