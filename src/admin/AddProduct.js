import React, {useState, useEffect} from 'react'
import Base from '../core/Base'
import { Link } from 'react-router-dom'
import { getCategories, createaProduct } from './helper/adminapicall'
import { isAutheticated } from '../auth/helper'

const AddProducts = () => {

  const {user, token} = isAutheticated();

    const [values, setvalues] = useState({
        name:"",
        description:"",
        price:"",
        stock:"",
        photo:"",
        categories: [],
        category: "",
        loading: false,
        error: "",
        createdProduct:"",
        getRedirect: false,
        formData: ""
    })

    const {name, description, price, stock, photo, categories, category, loading, error, createdProduct, getRedirect, formData} = values

    const preload = () => {
        getCategories().then(data => {
            if(data.error){
                setvalues({...values, error: data.error})
            }else{
                setvalues({...values, categories: data, formData: new FormData()})
                //console.log(data)
            }
        })
    }

    useEffect(() => {
        preload()
    }, [])

    const onSubmit = (event) => {
      event.preventDefault()
      setvalues({...values, error: "", loading: true})
      createaProduct(user._id, token, formData).then(
        data => {
          if(data.error){
            setvalues({...values, error: data.error})
          }else{
            setvalues({
              ...values,
              name: "",
              description: "",
              price: "",
              photo: "",
              stock: "",
              loading: "",
              createdProduct: data.name
            })
          }
        }
      ).catch()
    }

    const handleChange = name => event => {
      const value = name === "photo"? event.target.files[0] : event.target.value
      formData.set(name, value)
      setvalues({...values, [name]: value})
    } 

    const successMessage = () => {
      return <div className="alert alert-success mt-3" style={{display: createdProduct ? "" : "none"}}>
        <h4>{createdProduct} created successfully</h4>
      </div>
    }

    const errorMessage = () => {

    }

    const createProductForm = () => (
        <form >
          <span>Post photo</span>
          <div className="form-group">
            <label className="btn btn-block btn-success">
              <input
                onChange={handleChange("photo")}
                type="file"
                name="photo"
                accept="image"
                placeholder="choose a file"
              />
            </label>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("name")}
              name="photo"
              className="form-control"
              placeholder="Name"
              value={name}
            />
          </div>
          <div className="form-group">
            <textarea
              onChange={handleChange("description")}
              name="photo"
              className="form-control"
              placeholder="Description"
              value={description}
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("price")}
              type="number"
              className="form-control"
              placeholder="Price"
              value={price}
            />
          </div>
          <div className="form-group">
            <select
              onChange={handleChange("category")}
              className="form-control"
              placeholder="Category"
            >
              <option>Select</option>
              <option value="a">a</option>
              {categories && 
                categories.map((cate, index) => (
                <option key={index} value={cate._id}>{cate.name}</option>
                ))
              }
            </select>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("stock")}
              type="number"
              className="form-control"
              placeholder="Quantity"
              value={stock}
            />
          </div>
          
          <button type="submit" onClick={onSubmit} className="btn btn-outline-success mb-3">
            Create Product
          </button>
        </form>
      );

    return (
        <Base title="Product creation section" description="Add your products for sale here" className="container bg-info p-4">
            <h1 className="text-white">Add Products</h1>
            <Link to="/admin/dashboard" className="btn btn-sm btn-success mb-3">Admin Home</Link>
            <div className="row bg-dark text-white rounded">
                <div className="col-md-8 offset-md-2">
                    {successMessage()}
                    {createProductForm()}
                </div>
            </div>
        </Base>
    )
}

export default AddProducts
