import { useState } from "react";
import styles from "./App.module.css";
import Card from "./components/Card/Card";
import CreateUserForm from "./components/CreateUserForm/CreateUserForm";
import UserList from "./components/UserList/UserList";
import Modal from "./components/UI/Modal/Modal";
function App() {
  const [users, setUsers] = useState([]);
  const handleCreateUser = (user) => {
    setUsers((previousUsers) => [user, ...previousUsers]);
  };

  return (
    <div className={styles.app}>
      <Card>
        <CreateUserForm createUser={handleCreateUser} />
      </Card>
      <Card>
        <UserList users={users} />
      </Card>
        {/* <Modal
          title="Заголовок"
          description="Описание"
          textButton="Закрыть"
          onClick={() => {}}
        /> */}
    </div>
  );
}

export default App;
