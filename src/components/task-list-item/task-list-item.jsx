import styles from './task-list-item.module.css';
import Button from '../button/button';
import EditForm from '../edit-form/edit-form';

import { FaCheckCircle, FaEdit, FaUndoAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

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
                    <span className={`${task.complete ? styles.complete : ''} ${styles.text}`}>
                        {task.text}
                    </span>
                    <div className={styles.panel}>
                        <span>
                            {task.date}, {task.time}
                        </span>
                        <div className={styles.buttons}>
                            <Button
                                onClick={() => handleToggleTaskCompletion(task.id)}
                                color='green'
                            >
                                {task.complete ? <FaUndoAlt /> : <FaCheckCircle />}
                            </Button>
                            {!task.complete && (
                                <Button onClick={() => handleStartEditing(task)} color='violet'>
                                    <FaEdit />
                                </Button>
                            )}
                            <Button onClick={() => handleDeleteTask(task.id)} color='red'>
                                <MdDelete />
                            </Button>
                        </div>
                    </div>
                </>
            )}
        </li>
    );
};

export default TaskListItem;
