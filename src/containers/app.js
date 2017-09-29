import { connect } from 'react-redux'
import App from '../components/app'
import product from '../actions/productsActions'

const mapStateToProps = (state) => (
    {
        products: state.products,
    }
);

const mapDispatchToProps = (dispatch, props) => ({
    loadProducts: () => {
        dispatch(product.loadProducts());
    },
});

const connectApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default connectApp;
