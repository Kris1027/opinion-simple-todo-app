import { useEffect, useState } from 'react';
import AddForm from './components/add-form/add-form';
import Container from './components/container/container';
import Heading from './components/heading/heading';
import TaskList from './components/task-list/task-list';
import TaskSummary from './components/task-summary/task-summary';
import TodayDate from './components/today-date/today-date';

import { getTasksFromLocalStorage, saveTasksToLocalStorage } from './utils/local-storage';
import { addDate, addTime } from './utils/date-formatter';

const Todo = () => {
    const [tasks, setTasks] = useState(getTasksFromLocalStorage);
    const [taskInput, setTaskInput] = useState('');
    const [editingTask, setEditingTask] = useState(null);
    const [editTaskInput, setEditTaskInput] = useState('');

    useEffect(() => {
        saveTasksToLocalStorage(tasks);
    }, [tasks]);

    const handleAddTask = (e) => {
        e.preventDefault();
        if (taskInput.trim() !== '') {
            const newTask = {
                id: Math.random(),
                text: taskInput,
                complete: false,
                date: addDate,
                time: addTime,
            };
            setTasks([...tasks, newTask]);
            setTaskInput('');
        }
    };

    const handleToggleTaskCompletion = (id) => {
        setTasks(
            tasks.map((task) => (task.id === id ? { ...task, complete: !task.complete } : task))
        );
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const handleStartEditing = (task) => {
        setEditingTask(task);
        setEditTaskInput(task.text);
    };

    const handleSaveEditedTask = (e) => {
        e.preventDefault();
        if (editTaskInput.trim() !== '') {
            setTasks(
                tasks.map((task) =>
                    task.id === editingTask.id ? { ...task, text: editTaskInput } : task
                )
            );
            setEditingTask(null);
            setEditTaskInput('');
        }
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
                    handleToggleTaskCompletion={handleToggleTaskCompletion}
                    handleDeleteTask={handleDeleteTask}
                    handleStartEditing={handleStartEditing}
                    editingTask={editingTask}
                    handleSaveEditedTask={handleSaveEditedTask}
                    setEditingTask={setEditingTask}
                    editTaskInput={editTaskInput}
                    setEditTaskInput={setEditTaskInput}
                />
            </main>
            <footer>
                <TaskSummary tasks={tasks} />
            </footer>
        </Container>
    );
};

export default Todo;
