import React from 'react'
import Base from "../core/Base"
import {isAutheticated} from '../auth/helper/index'
import {Link} from 'react-router-dom'

const AdminDashboard = () => {

    const {user: {name, email, role}} = isAutheticated()

    const adminleftside = () => {
        return (
            <div className="card">
                <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/admin/create/category" className="nav-link text-info">Create categories</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/categories" className="nav-link text-info">Manage categories</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/create/product" className="nav-link text-info">Create Products</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/products" className="nav-link text-info">Manage products</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/orders" className="nav-link text-info">Manage orders</Link>
                    </li>
                </ul>
            </div>
        )
    }

    const adminrightside = () => {
        return(
            <div className="card mb-4">
                <h4 className="card-header">Admin Information</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Name: </span>
                        {name}
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Email: </span>
                        {email}
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-danger mr-2">Admin previlege</span>
                    </li>
                </ul>
            </div>
        )

    }

    return (
        <Base title="Welcome to admin area" className="container bg-success p-4" description="Manage all of your products and orders here">
            <div className="row">
                <div className="col-3">
                {adminleftside()}        
                </div>
                <div className="col-9">
                {adminrightside()}
                </div>
            </div>
        </Base>
    )
}

export default AdminDashboard