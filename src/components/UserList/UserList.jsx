import User from "../User/User";
import styles from "./UserList.module.css";

const UserList = ({ users }) => {
  return (
    <div>
      {users.length > 0 ? (
        <div className={styles.list}>
          {users.map((user) => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyList}>
          <div className={styles.description}>Пользователей не существует</div>
        </div>
      )}
    </div>
  );
};

export default UserList;
