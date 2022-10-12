import User from './User/User'
import cn from './Users.module.sass'

const Users = ({ users, setUserProfile }) => {

  const usersElements = users.map((user, index) => {
    return <User setUserProfile={setUserProfile} key={index} userInfo={user} />
  })


  return (
    <div className={cn.inner}>
      {usersElements}
    </div>
  )
}

export default Users
