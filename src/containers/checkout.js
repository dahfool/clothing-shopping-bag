import { connect } from 'react-redux'
import Checkout from '../components/checkout'
import { navigateBack } from '../actions/routing'
import { applyPromotion } from '../actions/promotionsActions'



const mapStateToProps = (state, props) => (
    {
        total: state.products.total,
        promotion: state.products.discountsActive,
        discountedTotal: state.products.discountCountedTotal,
        discountedAmount: state.products.discountedAmount
    }
);

const mapDispatchToProps = (dispatch, props) => ({
    onClick: (e, page) => {
        e.preventDefault();
        dispatch(navigateBack(page));
    },
    applyPromotion: (e) => {
        e.preventDefault();
        dispatch(applyPromotion(e.target.querySelector('input').value))
    },
});

const connectCheckout = connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkout);

export default connectCheckout;
