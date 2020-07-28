import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { isAutheticated } from "../auth/helper";
import { Link } from "react-router-dom";
import { updateCategory, getCategory } from "./helper/adminapicall";

const UpdateCategory = ({match}) => {

    const { user, token } = isAutheticated();

    const [values, setvalues] = useState({
        name:"",
        categoryId: "",
        loading: false,
        error: "",
        updatedCategory: "",
        getRedirect: false
    })

    const {name, categoryId, loading, error, updatedCategory, getRedirect } = values
    
    const preload = (categoryId) => {
        getCategory(categoryId).then(data => {
            if(data.error){
                setvalues({...values, error: data.error})
            }else{
                setvalues({
                    ...values,
                    name: data.name,
                    category: data._id
                })
                
                console.log(data)
            }
        })
    }

    useEffect(() => {
        preload(match.params.categoryId)
    }, [])

    const onSubmit = (event) => {
        event.preventDefault()
        setvalues({...values, error: "", loading: true})
  
        updateCategory(match.params.categoryId, user._id, token, {name}).then(
          data => {
            if(data.error){
              setvalues({...values, error: data.error})
              console.log(data.error)
            }else{
              setvalues({
                ...values,
                name: "",
                loading: "",
                updatedCategory: data.name
              })
            }
          }
        ).catch()
      }

    const handleChange = name => event => {
        const value = event.target.value
        setvalues({...values, [name]: value})
      } 

    const goBack = () => (
        <div className="mt-5">
            <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">
                Admin Home
      </Link>
        </div>
    );

    const successMessage = () => {
        return <div className="alert alert-success mt-3" style={{display: updatedCategory ? "" : "none"}}>
        <h4>{updatedCategory} Updated successfully</h4>
      </div>
    };

    const warningMessage = () => {
        if (error) {
            return <h4 className="text-success">Failed to update category!</h4>;
        }
    };

    const myCategoryForm = () => (
        <form>
            <div className="form-group">
                <p className="lead">Enter the category</p>
                <input
                    type="text"
                    className="form-control my-3"
                    onChange={handleChange("name")}
                    value={name}
                    autoFocus
                    required
                    placeholder="For Ex. Summer"
                />
                <button onClick={onSubmit} className="btn btn-outline-info">
                    Update Category
        </button>
            </div>
        </form>
    );

    return (
        <Base
            title="Update a category here"
            description="Update the selected category from the previous page"
            className="container bg-info p-4"
        >
            <div className="row bg-white rounded">
                <div className="col-md-8 offset-md-2">
                    {successMessage()}
                    {warningMessage()}
                    {myCategoryForm()}
                    {goBack()}
                </div>
            </div>
        </Base>
    );
};

export default UpdateCategory;
