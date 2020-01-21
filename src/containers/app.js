import {connect} from 'react-redux'
import App from '../components/app'
import product from '../actions/productsActions'
import navigate from '../actions/routing'
import promotion from '../actions/promotionsActions'


const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch, props) => ({
  loadProducts: () => {
    dispatch(product.loadProducts());
  },

  deleteProduct: (e, id) => {
    e.preventDefault();
    dispatch(product.deleteProduct(id));
  },

  onChange: (value, id, index) => {
    dispatch(product.updatePrice(value, id, index))
  },

  onSubmit: (e, page) => {
    e.preventDefault();
    dispatch(product.updateTotal());
    dispatch(promotion.checkPromotion());
    dispatch(navigate.navigate(page));
  },

});

const connectApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default connectApp;
