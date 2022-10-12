import React from 'react'
import { connect } from 'react-redux';
import Users from './Users';
import { setUsers, setUserProfile } from '../../redux/reducers/users-reducer'


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setUsers()
  }
  render() {
    return <Users {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.filtredUsers,
  }
}
export default connect(mapStateToProps, { setUsers, setUserProfile })(UsersContainer)
