import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import { Provider } from 'react-redux'
import store from './store/store'
import App from './App'
import ProductPage from './components/ProductPage'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import ProfilePage from './pages/ProfilePage'
import OrdersPage from './pages/OrdersPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='/orders' element={<OrdersPage/>}/>
      <Route path='/productdetails/:id' element={<ProductPage/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
    <App/>
  </Provider>
)
