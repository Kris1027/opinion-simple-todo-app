import styles from './task-summary.module.css';

const TaskSummary = () => {
    return (
        <div className={styles.taskSummary}>
            <p>
                All: <span>3</span>
            </p>
            <p>
                Active: <span>2</span>
            </p>
            <p>
                Completed: <span>1</span>
            </p>
        </div>
    );
};

export default TaskSummary;
