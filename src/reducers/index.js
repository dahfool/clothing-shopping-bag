import { combineReducers } from 'redux'

import products from './products'
import discounts from './discounts'

export default combineReducers({
    products,
    discounts
});