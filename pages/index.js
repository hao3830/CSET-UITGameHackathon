import { useState } from 'react'
import Homepage from '../components/HomePage/index'

export default function Home() {
  const [user, setUser] = useState({
    userName: '',
    password: '',
    email: '',
  })

  return (
    <div>
      <Homepage setUser={setUser} user={user} />
    </div>
  )
}
