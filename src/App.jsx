import { useEffect } from "react"
import authService from './appwrite/auth'
import {login, logout} from './features/authslice'
import { useDispatch } from "react-redux"

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login(userData))
      }else{
        dispatch(logout())
      }
    }).catch((error)=>{
      console.log(error)
    })
  })



  return (
    <>
    </>
  )
}

export default App
