import { useState } from "react";
import Button from "../UI/Button/Button";
import styles from "./CreateUserForm.module.css";

const CreateUserForm = ({ createUser, showModal, changeModal }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      id: Math.random(),
      name: name.replace(/\s+/g, " ").trim(),
      age: age,
    };

    if (name === "" || age === "") {
      showModal(true);
      changeModal("Некорректный ввод", "Поля не могут быть пустыми");
    } else if (age < 1) {
      showModal(true);
      changeModal("Некорректный возраст", "Возраст должен быть больше нуля");
    } else {
      createUser(newUser);
    }

    setName("");
    setAge("");
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  return (
    <form id="create-user" className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="name">Имя:</label>
      <input
        autoFocus
        type="text"
        id="name"
        name="name"
        placeholder="Иван"
        onChange={handleChangeName}
        value={name}
        maxLength={50}
      />
      <label htmlFor="age">Возраст:</label>
      <input
        type="text"
        id="age"
        name="age"
        placeholder="23"
        onChange={handleChangeAge}
        value={age}
      />
      <Button type="submit">Отправить</Button>
    </form>
  );
};

export default CreateUserForm;
