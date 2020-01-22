import React from 'react'
import { Props } from './Shopitem.types'

const StopItem: React.FC<Props> = ({
  deleteProduct,
  onChange,
  ImageName,
  ProductName,
  ProductPrice,
  index,
}) => (
  <tr>
    <td><img src={`../assets/img/${ImageName}`} alt={ProductName}/></td>
    <td>
      <h4>{ProductName}</h4>
      <button className='btn btn-light' value='Input'>EDIT</button>
      <button className='btn btn-light' value='Submit' onClick={(e) => deleteProduct(e, ProductName)}>X
        REMOVE
      </button>
      <button className='btn btn-light' value='Reset'>SAVE FOR LATER</button>
    </td>
    <td>S</td>
    <td>
      <input
        type='number'
        className='form-control form-control--small'
        onChange={(e) => onChange(e, ProductName, index)}
      />
    </td>
    <td className='h3'><sup>$</sup> {ProductPrice}</td>
  </tr>
)

export default StopItem
