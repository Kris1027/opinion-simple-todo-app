import Button from '../button/button';
import EditForm from '../edit-form/edit-form';
import styles from './task-list-item.module.css';

const TaskListItem = ({
    task,
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
        <li className={styles.taskListItem}>
            {editingTask && editingTask.id === task.id ? (
                <EditForm
                    handleSaveEditedTask={handleSaveEditedTask}
                    setEditingTask={setEditingTask}
                    editTaskInput={editTaskInput}
                    setEditTaskInput={setEditTaskInput}
                />
            ) : (
                <>
                    <span className={task.complete ? styles.complete : ''}>{task.text}</span>
                    <span className={styles.buttons}>
                        <Button onClick={() => handleToggleTaskCompletion(task.id)} color='green'>
                            {task.complete ? 'Undo' : 'Done'}
                        </Button>
                        {!task.complete && (
                            <Button onClick={() => handleStartEditing(task)} color='violet'>
                                Edit
                            </Button>
                        )}
                        <Button onClick={() => handleDeleteTask(task.id)} color='red'>
                            Delete
                        </Button>
                    </span>
                </>
            )}
        </li>
    );
};

export default TaskListItem;
