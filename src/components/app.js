import React, {useEffect} from 'react'
import ShopItemList from '../components/shopItemList'
import PropTypes from 'prop-types'

const App = ({products, loadProducts, deleteProduct, onChange, onSubmit}) => {

  useEffect(() => {
    if (products.items.length === 0) {
      loadProducts()
    }
  })

  return (
    <div className="App">
      <h1>YOUR SHOPPING BAG</h1>
      <ShopItemList
        products={products.items}
        deleteProduct={deleteProduct}
        onChange={onChange}
      />
      <button
        type='submit'
        className='btn btn-primary btn-lg'
        onClick={(e) => onSubmit(e, 'checkout')}
      >Next
      </button>
    </div>
  )
}


App.propTypes = {
  products: PropTypes.object.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default App
