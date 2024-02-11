import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import authService from './appwrite/auth'
import appwriteService from './appwrite/config'
import {login, logout} from './features/authslice'
import { addProductToStore } from './features/productSlice'
import { Query } from 'appwrite'

function App() {

  const dispatch = useDispatch();

  // console.log("updateCartStatus", updateCartStatus);

  // to load category based product from databsae
  useEffect(()=>{
    appwriteService.getProducts([Query.equal("category", "mobiles")]).then((product) => {
      if(product){
        dispatch(addProductToStore(product.documents))
      }
    })
    // code to persist login/ logout state after page refresh
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
