import React from 'react'
import { connect } from 'react-redux'
import Favourites from './Favourites'

const FavouritesContainer = (props) => {
  return (
    <Favourites {...props} />
  )
}

const mapStateToProps = (state) => {

}

export default connect(mapStateToProps, null)(FavouritesContainer) 
