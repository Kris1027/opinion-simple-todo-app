import styles from './add-form.module.css';

const AddForm = ({ taskInput, setTaskInput, handleAddTask }) => {
    return (
        <form onSubmit={handleAddTask} className={styles.addForm}>
            <input
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                type='text'
                placeholder='Create a new task and press enter...'
            />
            <button disabled={taskInput.trim() === ''} hidden type='submit' />
        </form>
    );
};

export default AddForm;
