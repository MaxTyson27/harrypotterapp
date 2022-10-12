import React from 'react'

import { connect } from 'react-redux'
import { filterUsers } from '../../redux/reducers/users-reducer'
import Filters from './Filters'

const FiltersContainer = (props) => {
  return <Filters {...props} />
}


export default connect(null, { filterUsers })(FiltersContainer)

