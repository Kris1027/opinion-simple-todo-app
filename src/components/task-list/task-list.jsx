import styles from './task.list.module.css';
import TaskListItem from '../task-list-item/task-list-item';

const TaskList = ({ tasks }) => {
    return (
        <div className={styles.taskList}>
            {tasks && tasks.length ? (
                <ul>
                    {tasks.map((task) => (
                        <TaskListItem key={task.id} task={task} />
                    ))}
                </ul>
            ) : (
                <p className={styles.taskInfo}>No tasks!</p>
            )}
        </div>
    );
};

export default TaskList;