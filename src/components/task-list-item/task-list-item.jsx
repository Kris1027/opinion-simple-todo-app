import Button from '../button/button';
import styles from './task-list-item.module.css';

const TaskListItem = ({ task }) => {
    return (
        <li className={styles.taskListItem}>
            <span className={task.complete ? styles.complete : ''}>{task.text}</span>
            <span className={styles.buttons}>
                <Button color='green'>{task.complete ? 'Undo' : 'Done'}</Button>
                {!task.complete && <Button color='violet'>Edit</Button>}
                <Button color='red'>Delete</Button>
            </span>
        </li>
    );
};

export default TaskListItem;
