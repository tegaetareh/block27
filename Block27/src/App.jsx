import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

function App() {
  const [token, setToken] = useState(null)

  return (
    <div>
        <h2><u>Block 27 - Authentication</u></h2>
        
        <SignUpForm  setToken={setToken} />
        <Authenticate token={token} setToken={setToken} />
    </div>
 
  )
}

export default App
