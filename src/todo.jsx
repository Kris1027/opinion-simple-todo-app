import { useState } from 'react';
import AddForm from './components/add-form/add-form';
import Container from './components/container/container';
import Heading from './components/heading/heading';
import TaskList from './components/task-list/task-list';
import TaskSummary from './components/task-summary/task-summary';
import TodayDate from './components/today-date/today-date';

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const handleAddTask = (e) => {
        e.preventDefault();
        if (taskInput.trim() !== '') {
            const newTask = {
                id: Math.random(),
                text: taskInput,
                complete: false,
            };
            setTasks([...tasks, newTask]);
            setTaskInput('');
        }
    };

    const handleToggleCompletion = (id) => {
        setTasks(
            tasks.map((task) => (task.id === id ? { ...task, complete: !task.complete } : task))
        );
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <Container>
            <header>
                <Heading />
                <AddForm
                    taskInput={taskInput}
                    setTaskInput={setTaskInput}
                    handleAddTask={handleAddTask}
                />
                <TodayDate />
            </header>
            <main>
                <TaskList
                    tasks={tasks}
                    handleToggleCompletion={handleToggleCompletion}
                    handleDeleteTask={handleDeleteTask}
                />
            </main>
            <footer>
                <TaskSummary />
            </footer>
        </Container>
    );
};

export default Todo;
