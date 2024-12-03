import { MdAddCircleOutline } from 'react-icons/md';
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
            <button className={styles.subButton} type='submit'>
                <MdAddCircleOutline size={20} />
            </button>
        </form>
    );
};

export default AddForm;
