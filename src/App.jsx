import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import sha256 from 'sha256'
import './App.css'
import axios from 'axios'
import AdminPanel from './AdminPanel'

function App() {
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState({ login: "", password: "" });
   const validate = async () => {
    
      try {
        const res = await axios.post("http://localhost:3002/validate", {},{ withCredentials: true });
        if (res.data) {
          console.log(res.data);
          
          setUser(res.data)
        }
      } catch (error) {
        console.error(error);

      }
    }
  const signin = async () => {
    try {
      await axios.post('http://localhost:3002/login', { login: login.login, password: sha256(login.password) }, { withCredentials: true });
      validate();
      
    } catch (err) {
      if (err.response && err.response.status === 403) {
        alert('Podano błędne dane');
      } else {
        console.log(err);
        
        alert('Something went wrong.');
      }
    }

  }
  useEffect(() => {
    validate();
  }, []);
  return (
    <div className='bg-stone-700  w-full h-screen flex flex-col justify-center items-center overflow-auto pb-5'>
      {user ? (
        <AdminPanel />
      ) : (
        <div className='bg-stone-500 w-150 h-100 flex justify-center items-center flex-col gap-5 rounded-[65px]'>
          <input className='bg-stone-700 text-white placeholder:pl-5 h-8 rounded-xl' placeholder='login' value={login.login} onChange={(e) => { setLogin(prev => ({ ...prev, login: e.target.value })); }} type='text' />
          <input className='bg-stone-700 text-white placeholder:pl-5 h-8 rounded-xl' placeholder='password' value={login.password} onChange={(e) => { setLogin(prev => ({ ...prev, password: e.target.value })); }} type="password" />

          <button className='bg-stone-700 text-white h-9 w-18 hover:bg-stone-600 duration-25 rounded-xl' onClick={signin}>Login</button>
        </div>)}
    </div>

  )
}

export default App
