import {connect} from 'react-redux'
import App from '../components/App/App'
import product from '../actions/products/actions'
import navigate from '../actions/routing'
import promotion from '../actions/promotions/actions'
import {Inital, ProductsActionType} from "../actions/products/actions.types";
import {LinkDispatchProps, Products} from "../components/App/App.types";
import {ThunkDispatch} from "redux-thunk";
import {PromotionActionType} from "../actions/promotions/actions.types";

const mapStateToProps = (state: { products: Inital } ): Products => ({
  products: state.products.checkoutItems
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, ProductsActionType| PromotionActionType>): LinkDispatchProps => ({
  loadProducts: (data) => {
    dispatch(product.loadProducts(data));
  },

  deleteProduct: (e, id) => {
    e.preventDefault();
    dispatch(product.deleteProduct(id));
  },

  onChange: (e, id, index) => {
    e.preventDefault()
    dispatch(product.updatePrice(parseInt(e.target.value, 10), id, index))
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
)(App)

export default connectApp
