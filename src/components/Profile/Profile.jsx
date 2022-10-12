import React, { useEffect } from 'react'
import cn from './Profile.module.sass'
import userImage from '../../images/user.jpeg'

const Profile = ({ profile, setUserProfile }) => {

  useEffect(() => {

    return () => {
      setUserProfile(profile[0].name)
    }

  }, [profile])


  return (
    <div className={cn.inner}>
      <div>
        <img src={profile[0].image || userImage} alt="person" />
        <button className={cn.button}>В избранное</button>
      </div>
      <ul className={cn.list}>
        <li><h3 className={cn.name}>Имя персонажа: {profile[0].name}</h3></li>
        <li><h3 className={cn.name}>Имя актера: {profile[0].actor}</h3></li>
        <li>Род: {profile[0].ancestry || 'Не указано'}</li>
        <li>Дата рождения: {profile[0].dateOfBirth || 'Не указано'}</li>
        <li>Год рождения: {profile[0].yearOfBirth || 'Не указано'}</li>
        <li>Цвет глаз: {profile[0].eyeColour || 'Не указано'}</li>
        <li>Пол: {profile[0].gender || 'Не указано'}</li>
        <li>Студент Хогвартсва: {profile[0].hogwartsStudent || 'Не указано'}</li>
        <li>Дом: {profile[0].house || 'Не указано'}</li>
        <li>Волшебник: {profile[0].wizard ? 'Yes' : 'No'}</li>
        <li>Патронус: {profile[0].patronus || 'Не указано'}</li>
        <li>Вид: {profile[0].species || 'Не указано'}</li>
        <li>
          <ul className={cn.wand_list}>
            <li>Характеристика палочки:</li>
            <li>Ядро: {profile[0].wand.core || 'Не указано'}</li>
            <li>Длинна: {profile[0].wand.length || 'Не указано'}</li>
            <li>Дерево: {profile[0].wand.wood || 'Не указано'}</li>
          </ul>
        </li>
        <li>Цвет волос: {profile[0].hairColour || 'Не указано'}</li>
        <li>Персонал Хогвартса: {profile[0].hogwartsStaff ? 'Yes' : 'No'}</li>
      </ul>

    </div>
  )
}

export default Profile
