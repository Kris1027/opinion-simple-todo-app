import styles from './add-form.module.css';

const AddForm = () => {
    return (
        <form className={styles.addForm}>
            <input type='text' placeholder='Create a new todo...' />
            <button type='submit' hidden />
        </form>
    );
};

export default AddForm;
