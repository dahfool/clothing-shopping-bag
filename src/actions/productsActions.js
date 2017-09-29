import data from "../data/products.json";

const loadProducts = () => (
    {
        type: 'LOAD_PRODUCTS',
        payload: data
    }
)


export default {
    loadProducts,
};
