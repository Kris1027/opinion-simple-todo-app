import { addDate, getDay } from '../../utils/date-formatter';
import styles from './today-date.module.css';

const TodayDate = () => {
    return (
        <div className={styles.todayDate}>
            <span>Today is {getDay}</span>
            <span>{addDate}</span>
        </div>
    );
};

export default TodayDate;
