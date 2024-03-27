import Button from "../Button/Button";
import styles from "./Modal.module.css";

const Modal = ({ active, setActive, title, description, textButton }) => {
  const closeModal = () => {
    setActive(false);
  };
  return (
    <div
      className={active ? styles.activeModal : styles.modal}
      onClick={closeModal}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.body}>
          <div className={styles.description}>{description}</div>
          <div>
            <Button onClick={closeModal} type="button">
              {textButton || "Закрыть"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
