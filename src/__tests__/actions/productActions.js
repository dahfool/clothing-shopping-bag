import product from '../../actions/productsActions'
import data from "../../data/products.json";


describe('Product actions', () => {

    it('should return load prodcuts', () => {
        expect(product.loadProducts()).toEqual({
            type: 'LOAD_PRODUCTS',
            payload: data
        });
    });

    it('Should return product id to be deleted', ()=> {
        expect(product.deleteProduct(1)).toEqual({
            type: 'DELETE_PRODUCT',
            payload: 1
        });
    });

    it('Should return updated quantity, product id and index', () => {
        expect(product.updatePrice(10, 1, 1)).toEqual({
            type: 'UPDATE_PRICE',
            payload: {
                quantity: 10,
                id: 1,
                index: 1
            }
        });
    });

    it('Should return update total type', () => {
        expect(product.updateTotal(10, 1, 1)).toEqual({ type:'UPDATE_TOTAL' });
    });


});

