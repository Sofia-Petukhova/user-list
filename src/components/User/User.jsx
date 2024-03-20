import styles from "./User.module.css";

const User = ({ name, age }) => {
  return (
    <div className={styles.user}>
      <div>Имя: {name}</div>
      <div>Возраст: {age}</div>
    </div>
  );
};

export default User;
