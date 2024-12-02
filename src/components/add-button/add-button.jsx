import styles from './add-button.module.css';

const AddButton = () => {
    return (
        <div className={styles.container}>
            <button className={styles.addButton}>+</button>
        </div>
    );
};

export default AddButton;
