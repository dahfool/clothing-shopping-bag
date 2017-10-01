import React, {Component} from 'react'
import ShopItem from '../components/shopItem'
import PropTypes from 'prop-types'

export default class App extends Component {

    componentWillMount() {

        if(this.props.products.items.length === 0) {
            this.props.loadProducts()
        }
    }

    render() {
        const products = this.props.products.checkoutItems;

        return (
            <div className="App">
                <h1>YOUR SHOPPING BAG</h1>
                <ShopItem products={products} deleteProduct={this.props.deleteProduct} onChange={this.props.onChange}/>
                <button type='submit' className='btn btn-primary btn-lg' onClick={(e)=>this.props.onSubmit(e, 'checkout')}>Next</button>
            </div>
        );
    }
}

App.propTypes = {
    products: PropTypes.object.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired

};
