import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { setUserProfile } from '../../redux/reducers/users-reducer'

const ProfileContainer = (props) => {
  return <Profile {...props} />
}

const mapStateToProps = (state) => ({
  profile: state.users.profile
})

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer) 
