import { lazy } from "react"

// Lazy Loaded Pages 
export const CartPage = lazy(()=> import("./CartPage"))
export const LoginPage = lazy(()=> import("./LoginPage"))
export const SignUpPage = lazy(()=> import("./SignUpPage"))
export const ProfilePage = lazy(()=> import("./ProfilePage"))
export const OrdersPage = lazy(()=> import("./OrdersPage"))
export const WishListPage = lazy(()=> import("./WishListPage"))
export const ProductDetails = lazy(()=> import("../components/ProductDetails"))
export const CategoryProductsPages = lazy(()=> import("./CategoryProductsPages"))
export const AdminPage = lazy(()=> import("./AdminPage"))