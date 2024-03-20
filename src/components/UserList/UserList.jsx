import User from '../User/User';
import styles from './UserList.module.css'

const UserList = ({users}) => {
  return (
    <div className={styles.list}>
      {users.map((user) => <User key={user.id} name={user.name} age={user.age}/>)}
    </div>
  )
}

export default UserList;