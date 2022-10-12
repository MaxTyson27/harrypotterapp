import React from 'react'
import { useForm } from 'react-hook-form'
import cn from './Filters.module.sass'

const Filters = ({ filterUsers }) => {

  const {
    register,
    handleSubmit,
  } = useForm({
    mode: "onChange"
  })

  const onSubmit = (data) => {
    const validData = {}
    if (data.yearOfBirth !== '') {
      data.yearOfBirth = +data.yearOfBirth
    }
    for (let key in data) {
      if (data[key] !== '' && data[key] !== 'all') {
        validData[key] = data[key]
      }
    }
    filterUsers(validData)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn.form}>
      <h2>Поиск</h2>
      <div>
        <p>Имя</p>
        <input
          type="text"
          placeholder='Имя'
          {...register('name', {
            required: false,
          })}
        />
      </div>
      <div>
        <p>Год рождения</p>
        <input
          type="text"
          placeholder='Год рождения'
          {...register('yearOfBirth', {
            required: false,
          })}
        />
      </div>
      <div>
        <label htmlFor="wizard">Волшебник</label>
        <input
          id='wizard'
          type="checkbox"
          {...register('wizard', {
            required: false,
          })}
        />
      </div>
      <div>
        <select {...register("house")}>
          <option value='all'>Дом</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Ravenclaw">Ravenclaw</option>
        </select>
      </div>
      <div>
        <select {...register("gender")}>
          <option value='all'>Пол</option>
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
        </select>
      </div>
      <button>Фильтр</button>
    </form>
  )
}

export default Filters
