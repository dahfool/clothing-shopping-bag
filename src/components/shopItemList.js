import React from 'react'
import PropTypes from 'prop-types'
import ShopItem from '../components/shopItem'

const StopItemList = ({products, deleteProduct, onChange}) => {

    return (
        <table className="table" width="100%">
            <thead>
            <tr>
                <th>{products.length} ITEMS</th>
                <th></th>
                <th>SIZE</th>
                <th>QTY</th>
                <th>PRICE</th>
            </tr>
            </thead>
            <ShopItem products={products} deleteProduct={deleteProduct} onChange={onChange}/>
        </table>
    )
};

StopItemList.propTypes = {
    products: PropTypes.array,
    deleteProduct: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default StopItemList;
