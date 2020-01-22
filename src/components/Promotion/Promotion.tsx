import React from 'react'

import { Props } from './Promotion.types'

const Promotion: React.FC<Props> = ({
  onSubmit,
  promotion
}) => (
  <>
    { promotion.DiscountPercent &&
      <form className='row mb-5' onSubmit={(e) => onSubmit(e)}>
        <div className='col-6'>
          <p>ENTER PROMOTION CODE OR GIFT CARD</p>
        </div>
        <div className='col-3'>
          <input type='text' className='form-control' id='promotion'/>
        </div>
        <div className='col-3 text-right'>
          <button type='submit' className='btn btn-primary mt-0'>Apply</button>
        </div>
      </form>
    }
  </>
)

export default Promotion
