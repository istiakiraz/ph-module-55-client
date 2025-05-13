
import './App.css'
import Users from './components/Users'

const usersPromise = fetch('http://localhost:3000/users').then(res=> res.json());


function App() {

  return (
    <>
      
      <h1 className='text-2xl font-bold mt-8 text-center' >Simple CURD Application</h1>
      <Users usersPromise={usersPromise} ></Users>
     
    </>
  )
}

export default App
