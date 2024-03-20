import Button from "../Button/Button";
import styles from "./Modal.module.css";

const Modal = ({ title, description, textButton, onClick }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.body}>
        <div className={styles.description}>{description}</div>
        <div>
          <Button onClick={onClick} type="button">
            {textButton}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
