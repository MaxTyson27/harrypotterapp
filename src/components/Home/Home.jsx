import React from 'react'
import FiltersContainer from "../Filters/FiltersContainer";
import UsersContainer from "../Users/UsersContainer";

const Home = (props) => {
  return (
    <div className='home'>
      <FiltersContainer />
      <UsersContainer />
    </div>
  )
}

export default Home
