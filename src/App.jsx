import { useState } from "react";
import styles from "./App.module.css";
import Card from "./components/Card/Card";
import CreateUserForm from "./components/CreateUserForm/CreateUserForm";
import UserList from "./components/UserList/UserList";
import Modal from "./components/UI/Modal/Modal";
function App() {
  const [users, setUsers] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [modalTitle, setModalTitle] = useState("Заголовок");
  const [modalDescription, setModalDescription] = useState("Описание");

  const handleCreateUser = (user) => {
    setUsers((previousUsers) => [user, ...previousUsers]);
  };

  const handleShowModal = (isInputEmpty) => {
    setModalActive(isInputEmpty);
  };

  const handleChangeModal = (newTitle, newDescription) => {
    setModalTitle(newTitle);
    setModalDescription(newDescription);
  };

  return (
    <div className={styles.app}>
      <Card>
        <CreateUserForm
          createUser={handleCreateUser}
          showModal={handleShowModal}
          changeModal={handleChangeModal}
        />
      </Card>
      <Card>
        <UserList users={users} />
      </Card>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        title={modalTitle}
        description={modalDescription}
        textButton="Закрыть"
      />
    </div>
  );
}

export default App;
