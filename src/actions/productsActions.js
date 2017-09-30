import data from "../data/products.json";

const loadProducts = () => (
    {
        type: 'LOAD_PRODUCTS',
        payload: data
    }
)

const deleteProduct = (id) => (
    {
        type: 'DELETE_PRODUCT',
        payload: id
    }
)

const updatePrice = (quantity, id, index ) => (
    {
        type: 'UPDATE_PRICE',
        payload: { quantity, id, index }
    }
)

const updateTotal = () => (
    {
        type: 'UPDATE_TOTAL'
    }
)


export default {
    loadProducts,
    deleteProduct,
    updatePrice,
    updateTotal
};
