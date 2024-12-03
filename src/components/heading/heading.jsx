import styles from './heading.module.css';

const Heading = () => {
    return (
        <div className={styles.heading}>
            <img src='/opinion.png' alt='logo' />
            <h1>Simple Todo App</h1>
        </div>
    );
};

export default Heading;
