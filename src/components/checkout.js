import React from 'react';
import Promotion from '../components/promotion'
import PropTypes from 'prop-types'

const Checkout = ({total, promotion, discountedTotal, discountedAmount, onClick, applyPromotion}) => {

  return (
    <div className="App">
      <h1>Checkout</h1>
      <div className="row">
        <div className="col col-lg-3">
          Company info
        </div>
        <div className="col col-lg-9">
          <Promotion onSubmit={applyPromotion} promotion={promotion}/>
          <table className="table">
            <tbody>
            <tr>
              <td><h4>SUBTOTAL</h4></td>
              <td></td>
              <td className='text-right h3'><sup>$</sup> {total}</td>
            </tr>
            <tr>
              <td><h4>PROMOTION CODE</h4></td>
              <td></td>
              <td className='text-right h3'><sup>$</sup> {discountedAmount}</td>
            </tr>
            <tr>
              <td>
                <h4>ESTIMATED SHIPPING</h4>
                <p>You will qualify for fee shipping <br/> because your order is over $50</p>
              </td>
              <td></td>
              <td className='text-right'>FREE</td>
            </tr>
            <tr>
              <td>
                <h4>ESTIMATED TOTAL</h4>
                <p>Tax will be applied during checkout</p>
              </td>
              <td></td>
              <td className='text-right h3'><sup>$</sup> {discountedTotal}</td>
            </tr>
            </tbody>
          </table>
          <button type='submit' className='btn btn-light btn-lg' onClick={(e) => onClick(e, '/')}>Continue Shopping
          </button>
          <button type='submit' className='btn btn-primary btn-lg'>Checkout</button>
        </div>
      </div>
    </div>
  );
};

Checkout.propTypes = {
  total: PropTypes.string,
  promotion: PropTypes.object.isRequired,
  discountedTotal: PropTypes.string,
  discountedAmount: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  applyPromotion: PropTypes.func.isRequired
};

export default Checkout;


