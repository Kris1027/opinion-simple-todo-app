import styles from './today-date.module.css';

const TodayDate = () => {
    const now = new Date();
    return (
        <div className={styles.todayDate}>
            <span>Today</span>
            <span>{now.toLocaleDateString()}</span>
        </div>
    );
};

export default TodayDate;
