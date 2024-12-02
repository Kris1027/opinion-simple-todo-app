import styles from './button.module.css';

const Button = ({ children, onClick, color }) => {
    return (
        <button className={`${styles.button} ${styles[color]}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
