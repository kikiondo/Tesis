const loadProducts = () => {
  return dispatch => {
    return fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(resposeData => {
        dispatch({
          type: 'REPLACE_PRODUCTS',
          products: resposeData
        })
        console.log(resposeData)
      })
  }
}

const addToCart = product => {
  return {
    type: 'ADD_TO_CART',
    product
  }
}

const removeFromCart = product => {
  return {
    type: 'REMOVE_FROM_CART',
    product
  }
}

export { addToCart, removeFromCart, loadProducts }
