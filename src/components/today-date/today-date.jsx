import styles from './today-date.module.css';

const TodayDate = () => {
    const now = new Date();
    const weekday = now.toLocaleDateString('en-US', { weekday: 'long' });
    return (
        <div className={styles.todayDate}>
            <span>Today is {weekday}</span>
            <span>
                {now.toLocaleDateString('pl-PL', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                })}
            </span>
        </div>
    );
};

export default TodayDate;
