import {connect} from 'react-redux'
import Checkout from '../components/Checkout/Checkout'
import navigate from '../actions/routing'
import promotions from '../actions/promotions/actions'
import {Inital, ProductsActionType} from '../actions/products/actions.types';
import {LinkDispatchProps, LinkStateProps } from '../components/Checkout/Checkout.types'
import {ThunkDispatch} from 'redux-thunk';
import {PromotionActionType} from '../actions/promotions/actions.types';


const mapStateToProps = (state: { products: Inital } ): LinkStateProps => ({
  total: state.products.total,
  promotion: state.products.discountsActive,
  discountedTotal: state.products.discountCountedTotal,
  discountedAmount: state.products.discountedAmount
})


const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, ProductsActionType| PromotionActionType>): LinkDispatchProps => ({
  onClick: (e) => {
    e.preventDefault();
    dispatch(navigate.navigateBack());
  },
  applyPromotion: (e) => {
    e.preventDefault();
    dispatch(promotions.applyPromotion(''))
    // dispatch(promotions.applyPromotion(e.target.querySelector('input').value))
  },
});

const connectCheckout = connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);

export default connectCheckout;
