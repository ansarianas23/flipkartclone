import { useEffect } from 'react'
import { useDispatch } from "react-redux"
import authService from './appwrite/auth'
import appwriteService from './appwrite/config'
import {login, logout} from './features/authslice'
import { addProductToStore } from './features/productSlice'

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    appwriteService.getProducts().then((product) => {
      if(product){
        dispatch(addProductToStore(product.documents))
      }
    })

    // code to persist login/ loout state after page refresh
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login(userData))
      }
      else{
        dispatch(logout())
      }
    })
  },[])

  return (
    <>
    </>
  )
}

export default App
