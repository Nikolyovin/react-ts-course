import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { ITodo, IUser } from '../types/types'
import List from './List'
import UserItem from './UserItem'

const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users'
      )
      setUsers(response.data)
    } catch (e) {
      alert(e)
    }
  }
  // здесь мы передаем в пропсе компонент(именно так он передается) которые нужно промапить.
  //renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>
  return (
    <List
      items={users}
      renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
    />
  )
}

export default UsersPage
