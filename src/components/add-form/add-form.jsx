import styles from './add-form.module.css';

const AddForm = ({ taskInput, setTaskInput, handleAddTask }) => {
    return (
        <form onSubmit={handleAddTask} className={styles.addForm}>
            <input
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                type='text'
                placeholder='Create a new task...'
            />
            <button type='submit' hidden />
        </form>
    );
};

export default AddForm;
