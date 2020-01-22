import React, {useEffect} from 'react'
import ShopItemList from '../ShopItemList/ShopItemList'
import { Props } from './App.types'
import data from '../../data/products.json'

const App: React.FC<Props> = ({
  products = [],
  loadProducts,
  deleteProduct,
  onChange,
  onSubmit
}) => {

  useEffect(() => {
    if (products.length === 0) {
      loadProducts(data)
    }
  })

  return (
    <div className='App'>
      <h1>YOUR SHOPPING BAG</h1>
      <ShopItemList
        items={products}
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

export default App
