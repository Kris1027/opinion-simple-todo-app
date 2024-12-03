import styles from './task.list.module.css';
import TaskListItem from '../task-list-item/task-list-item';

const TaskList = ({
    tasks,
    handleToggleTaskCompletion,
    handleDeleteTask,
    handleStartEditing,
    editingTask,
    handleSaveEditedTask,
    setEditingTask,
    editTaskInput,
    setEditTaskInput,
}) => {
    return (
        <div className={styles.taskList}>
            {tasks && tasks.length ? (
                <ul>
                    {tasks.map((task) => (
                        <TaskListItem
                            key={task.id}
                            task={task}
                            handleToggleTaskCompletion={handleToggleTaskCompletion}
                            handleDeleteTask={handleDeleteTask}
                            handleStartEditing={handleStartEditing}
                            editingTask={editingTask}
                            handleSaveEditedTask={handleSaveEditedTask}
                            setEditingTask={setEditingTask}
                            editTaskInput={editTaskInput}
                            setEditTaskInput={setEditTaskInput}
                        />
                    ))}
                </ul>
            ) : (
                <p className={styles.taskInfo}>No tasks!</p>
            )}
        </div>
    );
};

export default TaskList;
