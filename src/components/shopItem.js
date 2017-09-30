import React from 'react'
import PropTypes from 'prop-types'

const StopItem = ({products, deleteProduct, onChange}) => {

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
            <tbody>
             {products.map((result, i) => (
                    <tr key={i}>
                        <td><img src={require(`../assets/img/${result.ImageName}`)} alt={result.ProductName}/></td>
                        <td>
                            <h4>{result.ProductName}</h4>
                            <button className="btn btn-light"  value="Input">EDIT</button>
                            <button className="btn btn-light"  value="Submit" onClick={(e)=>deleteProduct(e, result.ProductName)}>X REMOVE</button>
                            <button className="btn btn-light" value="Reset">SAVE FOR LATER</button>
                        </td>
                        <td>S</td>
                        <td><input type="number" className="form-control form-control--small" defaultValue={result.quantity}  onChange={(e)=>onChange(e.target.value, result.ProductName, i)} /></td>
                        <td className='h3'><sup>$</sup> {result.ProductPrice}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

StopItem.propTypes = {
    props: PropTypes.array,
};

export default StopItem;
