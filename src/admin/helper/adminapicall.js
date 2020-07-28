import { API } from "../../backend"

//Create a category
export const createCategory = (userId, token, categoryName) => {
    return fetch(`${API}/category/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(categoryName)
    }).then(
        response => {
            return response.json()
        }
    ).catch(err => console.log(err))
}

//get all categories
export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: "GET",
    }).then(response => {
        return response.json()
    }
    ).catch(err => console.log(err))
}

// export const updateProduct = (productId ,userId, token, product) => {
//     return fetch(`${API}/product/${productId}/${userId}`, {
//         method: "PUT",
//         headers: {
//             Accept: "application/json",
//             Authorization: `Bearer ${token}`
//         },
//         body: product
//     }).then(
//         response => {
//             return response.json()
//         }
//     ).catch(err => console.log(err))
// }
//update a category
///category/:categoryId/:userId
export const updateCategory = (categoryId ,userId, token, category) => {
    return fetch(`http://localhost:8000/api/category/${categoryId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    }).then(
        response => {
            return response.json()
        }
    ).catch(err => console.log(err))
}

//get a category
///category/:categoryId
export const getCategory = categoryId => {
    return fetch(`${API}/category/${categoryId}`, {
        method: "GET"
    }).then(response => {
        return response.json()
    }
    ).catch(err => console.log(err))
}

//product calls

//create a product
export const createaProduct = (userId, token, product) => {
    return fetch(`${API}/product/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: product
    }).then(
        response => {
            return response.json()
        }
    ).catch(err => console.log(err))
}

//get all products
export const getProducts = () => {
    return fetch(`${API}/products`, {
        method: "GET",
    }).then(response => {
        return response.json()
    }
    ).catch(err => console.log(err))
}

//get a product
export const getProduct = productId => {
    return fetch(`${API}/product/${productId}`, {
        method: "GET"
    }).then(response => {
        return response.json()
    }
    ).catch(err => console.log(err))
}

//delete a product
export const deleteProduct = (productId, userId, token) => {
  return fetch(`${API}/product/${productId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

///category/:categoryId/:userId
//delete a category
export const deleteCategory = (categoryId, userId, token) => {
    return fetch(`${API}/category/${categoryId}/${userId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };

//update a product
export const updateProduct = (productId ,userId, token, product) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: product
    }).then(
        response => {
            return response.json()
        }
    ).catch(err => console.log(err))
}