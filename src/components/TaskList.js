import React, { useState, useEffect, useRef } from 'react';
import axios from '../axios';
import AddTask from './AddTask';
import Loader from './Loader';
import Task from './Task';
import TaskHeader from './TaskHeader';

function TaskList() {
    const userId = localStorage.getItem('userId');
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const isInitialMount = useRef(true);

    // Get task data from database
    useEffect(() => {
        if(isInitialMount.current) {
            isInitialMount.current = false;
            getTasks()
            .then((res) => {
                setTodos(res.data[0]?.todos);
                setLoading(false);
            })
            .catch(error => console.log(error));
        }
        else {
            getTasks()
            .then((res) => setTodos(res.data[0]?.todos))
            .catch(error => console.log(error));
        }  
    });

    const getTasks = () => (
        axios({
            method: 'get',
            url: '/tasks/' + userId,
        })
    )

    // Display tasks based on status
    const displayTasks = (checked) => {
        return todos.filter((todo) => {
            return checked === todo.checked;
        }).map((todo) => {
            return (
                <Task todo={todo} />
            );
        });
    }

    // Groups tasks to pending and completed
    const pendingTasks = displayTasks(false);
    const completedTasks = displayTasks(true);

    return (
        <div className="taskList">
            <TaskHeader />

            {/* Add Task section */}
            <AddTask />

            {loading && <Loader />}

            {/* Pending Tasks */}
            {!loading && <div className="taskList__section">
                {pendingTasks.length > 0 ?
                    <div className="taskList__pending">
                        <h2 className="taskList__title">Pending Tasks</h2>
                        <ul className="taskList__list taskList__list--pending">{pendingTasks}</ul>
                    </div>
                    :
                    <h3 className="taskList__fallback">You don't have any pending tasks. Yaaaaayyyyy!!!!!!!!</h3>
                }
            </div>}

            {/* Completed Tasks */}
            <div className="taskList__section">
                {completedTasks.length > 0 &&
                    <div className="taskList__completed">
                        <h2 className="taskList__title">Completed Tasks</h2>
                        <ul className="taskList__list taskList__list--completed">{completedTasks}</ul>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default TaskList;
