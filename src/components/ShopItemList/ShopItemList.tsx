import React from 'react'
import ShopItem from '../ShopItem/ShopItem'
import { Props } from './ShopItemList.types'

const StopItemList: React.FC<Props> = ({
  items,
  deleteProduct,
  onChange
}) => (
  <table className='table'>
    <thead>
    <tr>
      <th>{items.length} ITEMS</th>
      <th/>
      <th>SIZE</th>
      <th>QTY</th>
      <th>PRICE</th>
    </tr>
    </thead>
    <tbody>
      {items.map(({ImageName, ProductName, ProductPrice}, i) => (
        <ShopItem
          key={i}
          index={i}
          deleteProduct={deleteProduct}
          onChange={onChange}
          ImageName={ImageName}
          ProductName={ProductName}
          ProductPrice={ProductPrice}
        />
      ))}
    </tbody>
  </table>
)


export default StopItemList;
