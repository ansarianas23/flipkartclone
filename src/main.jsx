import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Cart from './components/Cart'
import Layout from './components/Layout'
import Products from './components/Products'
import { Provider } from 'react-redux'
import store from './store/store'
import Login from './components/Login'
import SignUp from './components/SignUp'
import App from './App'
import Profile from './components/Profile'
import Orders from './components/Orders'
import ProductPage from './components/ProductPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Products/>}/>
      <Route path='/home' element={<Products/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/productdetails/:id' element={<ProductPage/>}/>
    </Route>
  )
)

// to persist login/logout state after refresh



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
    <App/>
  </Provider>
)
