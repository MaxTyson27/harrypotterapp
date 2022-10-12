import React from 'react'
import cn from '../Users.module.sass'
import userImage from '../../../images/user.jpeg'
import { NavLink } from "react-router-dom";

const User = ({ userInfo, setUserProfile }) => {

  return (
    <div className={cn.user}>
      <div>
        <NavLink to={'/profile'}>
          <img src={userInfo.image || userImage} alt="person image" onClick={() => {
            setUserProfile(userInfo.name)
          }} />
        </NavLink>
        <button className={cn.button}>В избранное</button>
      </div>
      <ul className={cn.list}>
        <li><h3 className={cn.name}>Имя персонажа: {userInfo.name}</h3></li>
        <li><h3 className={cn.name}>Имя актера: {userInfo.actor}</h3></li>
        <li>Род: {userInfo.ancestry || 'Не указано'}</li>
        <li>Дата рождения: {userInfo.dateOfBirth || 'Не указано'}</li>
        <li>Год рождения: {userInfo.yearOfBirth || 'Не указано'}</li>
        <li>Цвет глаз: {userInfo.eyeColour || 'Не указано'}</li>
        <li>Пол: {userInfo.gender || 'Не указано'}</li>
        <li>Студент Хогвартсва: {userInfo.hogwartsStudent || 'Не указано'}</li>
        <li>Дом: {userInfo.house || 'Не указано'}</li>
        <li>Волшебник: {userInfo.wizard ? 'Yes' : 'No'}</li>
        <li>Патронус: {userInfo.patronus || 'Не указано'}</li>
        <li>Вид: {userInfo.species || 'Не указано'}</li>
        <li>
          <ul className={cn.wand_list}>
            <li>Характеристика палочки:</li>
            <li>Ядро: {userInfo.wand.core || 'Не указано'}</li>
            <li>Длинна: {userInfo.wand.length || 'Не указано'}</li>
            <li>Дерево: {userInfo.wand.wood || 'Не указано'}</li>
          </ul>
        </li>
        <li>Цвет волос: {userInfo.hairColour || 'Не указано'}</li>
        <li>Персонал Хогвартса: {userInfo.hogwartsStaff ? 'Yes' : 'No'}</li>
      </ul>

    </div>
  )
}

export default User
