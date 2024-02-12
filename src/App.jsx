import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import authService from './appwrite/auth'
import appwriteService from './appwrite/config'
import {login, logout} from './features/authslice'
import { addProductToStore } from './features/productSlice'
import { addTocart, clearCart } from './features/cartSlice'
import { Query } from 'appwrite'

function App() {

  const dispatch = useDispatch();
  const userStatus = useSelector(state => state.auth.status)
  const userData = useSelector(state => state.auth.userData)
  const carts = useSelector(state => state.cart.carts);
  const updateCartStatus = useSelector(state => state.cart.updateCart);

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

   // to load database based cart user specific
   useEffect(()=>{
    if(userStatus){
      appwriteService.getCartProducts([Query.equal("userId", userData.$id)])
      .then((product)=>{
        if(product){
          dispatch(addTocart(product.documents));
        }
      })
    }else if(!userStatus){
      dispatch(clearCart())
    }

  },[userStatus, updateCartStatus]);

  return (
    <>
    </>
  )
}

export default App
