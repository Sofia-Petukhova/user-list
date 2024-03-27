import { useState } from "react";
import styles from "./App.module.css";
import Card from "./components/Card/Card";
import CreateUserForm from "./components/CreateUserForm/CreateUserForm";
import UserList from "./components/UserList/UserList";
import Modal from "./components/UI/Modal/Modal";
function App() {
  const [users, setUsers] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [ageError, setAgeError] = useState(false);

  const handleCreateUser = (user) => {
    setUsers((previousUsers) => [user, ...previousUsers]);
  };

  const handleShowModal = (isInputEmpty) => {
    setModalActive(isInputEmpty);
  };

  return (
    <div className={styles.app}>
      <Card>
        <CreateUserForm
          onCreateUser={handleCreateUser}
          showModal={handleShowModal}
          setAgeError={setAgeError}
        />
      </Card>
      <Card>
        <UserList users={users} />
      </Card>
      {modalActive && (
        <Modal
          active={modalActive}
          setActive={setModalActive}
          title="Некорректный ввод"
          description="Поля не могут быть пустыми"
        />
      )}
      {ageError && (
        <Modal
          active={ageError}
          setActive={setAgeError}
          title="Некорректный возраст"
          description="Возраст должен быть больше нуля"
        />
      )}
    </div>
  );
}

export default App;
