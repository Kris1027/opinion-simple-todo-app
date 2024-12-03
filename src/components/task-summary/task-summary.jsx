import styles from './task-summary.module.css';

const TaskSummary = ({ tasks }) => {
    const allTasks = tasks.length;
    const activeTasks = tasks.filter((task) => !task.complete).length;
    const completedTasks = tasks.filter((task) => task.complete).length;

    return (
        <div className={styles.taskSummary}>
            <p>
                All: <span>{allTasks}</span>
            </p>
            <p>
                Active: <span>{activeTasks}</span>
            </p>
            <p>
                Completed: <span>{completedTasks}</span>
            </p>
        </div>
    );
};

export default TaskSummary;
