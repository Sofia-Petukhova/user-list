import { useState } from "react";
import Button from "../UI/Button";
import styles from "./CreateUserForm.module.css";

const CreateUserForm = ({ createUser }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      id: Math.random(),
      name: name,
      age: age,
    };
    createUser(newUser);
    setName("");
    setAge(1);
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
        type="number"
        id="age"
        name="age"
        placeholder="23"
        onChange={handleChangeAge}
        max={200}
      />
      <Button type="submit">Отправить</Button>
    </form>
  );
};

export default CreateUserForm;
