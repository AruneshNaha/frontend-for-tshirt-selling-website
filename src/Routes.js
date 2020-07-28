import React from 'react'
import Home from './core/Home'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import signup from './user/Signup'
import signin from './user/Signin'
import AdminRoute from './auth/helper/AdminRoutes'
import PrivateRoute from './auth/helper/PrivateRoutes'
import UserDashboard from './user/UserDashBoard'
import AdminDashboard from './user/AdminDashBoard'
import AddCategory from './admin/AddCategory'
import AddProducts from './admin/AddProduct'
import ManageProducts from './admin/ManageProducts'
import UpdateProduct from './admin/UpdateProduct'
import ManageCategories from './admin/manageCategories'
import UpdateThisCategory from './admin/updateCategory'
import Cart from './core/Cart'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/signup" exact component={signup}></Route>
                <Route path="/signin" exact component={signin}></Route>
                <Route path="/cart" exact component={Cart}></Route>
                <PrivateRoute path="/user/dashboard" exact component={UserDashboard}></PrivateRoute>
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}></AdminRoute>
                <AdminRoute path="/admin/create/category" exact component={AddCategory}></AdminRoute>
                <AdminRoute path="/admin/categories" exact component={ManageCategories}></AdminRoute>
                <AdminRoute path="/admin/create/product" exact component={AddProducts}></AdminRoute>
                <AdminRoute path="/admin/products" exact component={ManageProducts}></AdminRoute>
                <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct}></AdminRoute>
                <AdminRoute path="/admin/category/update/:categoryId" exact component={UpdateThisCategory}></AdminRoute>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;