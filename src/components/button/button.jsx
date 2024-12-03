import styles from './button.module.css';

const Button = ({ children, onClick, color, type, disabled }) => {
    return (
        <button
            className={`${styles.button} ${styles[color]}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
