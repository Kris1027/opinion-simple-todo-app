import styles from './edit-form.module.css';
import Button from '../button/button';

const EditForm = ({ handleSaveEditedTask, setEditingTask, editTaskInput, setEditTaskInput }) => {
    return (
        <form onSubmit={handleSaveEditedTask} className={styles.editForm}>
            <input
                value={editTaskInput}
                onChange={(e) => setEditTaskInput(e.target.value)}
                type='text'
                placeholder='Edit a task...'
            />
            <Button type='submit' disabled={editTaskInput.trim() === ''} color='green'>
                Save
            </Button>
            <Button onClick={() => setEditingTask(null)} type='button' color='red'>
                Cancel
            </Button>
        </form>
    );
};

export default EditForm;
