import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import { Provider } from 'react-redux'
import store from './store/store'
import App from './App'
import HomePage from './pages/HomePage'
import { CartPage, LoginPage, SignUpPage, ProfilePage, OrdersPage, WishListPage, ProductDetails, CategoryProductsPages, AdminPage} from './pages/Lazy'
import LoadingSpinner from './components/LoadingSpinner'
import { Suspense } from 'react'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Suspense fallback={<LoadingSpinner/>}><Layout /></Suspense>}>
      <Route path='/' element={<Suspense fallback={<LoadingSpinner/>}><HomePage/></Suspense>}/>
      <Route path='/home' element={<Suspense fallback={<LoadingSpinner/>}><HomePage/></Suspense>}/>
      <Route path='/cart' element={<Suspense fallback={<LoadingSpinner/>}><CartPage/></Suspense>}/>
      <Route path='/login' element={<Suspense fallback={<LoadingSpinner/>}><LoginPage/></Suspense>}/>
      <Route path='/signup' element={<Suspense fallback={<LoadingSpinner/>}><SignUpPage/></Suspense>}/>
      <Route path='/profile' element={<Suspense fallback={<LoadingSpinner/>}><ProfilePage/></Suspense>}/>
      <Route path='/orders' element={<Suspense fallback={<LoadingSpinner/>}><OrdersPage/></Suspense>}/>
      <Route path='/wishlist' element={<Suspense fallback={<LoadingSpinner/>}><WishListPage/></Suspense>}/>
      <Route path='/productdetails/:id' element={<Suspense fallback={<LoadingSpinner/>}><ProductDetails/></Suspense>}/>
      <Route path='/category/:category' element={<Suspense fallback={<LoadingSpinner/>}><CategoryProductsPages/></Suspense>}/>
      <Route path='/admin' element={<Suspense fallback={<LoadingSpinner/>}><AdminPage/></Suspense>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
    <App/>
  </Provider>
)
