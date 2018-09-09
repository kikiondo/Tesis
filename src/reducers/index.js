// Función reductora, si no pasamos el por defecto, va a ver un undefine en el estado
const products = (state = [], action) => {
  if (action.type === 'REPLACE_PRODUCTS') { // Ya no se tiene que retornar todo el estado completo ...state
    return action.products
  }
  return state
}

// Función reductora
const cart = (state = [], action) => {
  if (action.type === 'ADD_TO_CART') {
    return state.concat(action.product) // Le vamos a concatenar un nuevo producto
  } else if (action.type === 'REMOVE_FROM_CART') {
    return state.filter(producto => producto.id !== action.product.id) // Metodo filter de los arreglos
  }
  return state
}

export { products, cart }
