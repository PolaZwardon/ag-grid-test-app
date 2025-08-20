import { useState } from 'react'
import { UserContext } from './state/UserContext';
import './App.css'
import Profile from './pages/Profile';

function App() {
  const [user, setUser] = useState({ name: 'Pola', email: 'pola@example.com' });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Profile />
    </UserContext.Provider>
  )
}

export default App
