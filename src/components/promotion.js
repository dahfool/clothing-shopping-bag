import React from 'react'
import PropTypes from 'prop-types'

const Promotion = ({onSubmit, promotion}) => {

  if (promotion.DiscountPercent === 0) {

    return (

      <form className="row mb-5" onSubmit={(e) => onSubmit(e)}>
        <div className="col-6">
          <p>ENTER PROMOTION CODE OR GIFT CARD</p>
        </div>
        <div className="col-3">
          <input type="text" className="form-control" id="promotion"/>
        </div>
        <div className='col-3 text-right'>
          <button type="submit" className="btn btn-primary mt-0">Apply</button>
        </div>
      </form>
    )
  } else {
    return (
      <div></div>
    )
  }
};

Promotion.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  promotion: PropTypes.object.isRequired
};

export default Promotion;
