import { useState } from "react";
import Button from "../UI/Button/Button";
import styles from "./CreateUserForm.module.css";

const CreateUserForm = ({ onCreateUser, showModal, setAgeError }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      id: Math.random(),
      name: name.replace(/\s+/g, " ").trim(),
      age: age,
    };

    if (!newUser.name || !newUser.age) {
      showModal(true);
      return;
    }

    if (age < 1) {
      setAgeError(true);
      return;
    }

    onCreateUser(newUser);
    setName("");
    setAge("");
  };

  const handleChangeName = ({ target }) => {
    setName(target.value);
  };

  const handleChangeAge = ({ target }) => {
    setAge(target.value.replace(/\D/g, ""));
  };

  return (
    <form id="create-user" className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="name">Имя:</label>
      <input
        autoFocus
        id="name"
        name="name"
        placeholder="Иван"
        onChange={handleChangeName}
        value={name}
        maxLength={50}
      />
      <label htmlFor="age">Возраст:</label>
      <input
        id="age"
        name="age"
        placeholder="23"
        onChange={handleChangeAge}
        value={age}
        maxLength={3}
      />
      <Button type="submit">Отправить</Button>
    </form>
  );
};

export default CreateUserForm;
