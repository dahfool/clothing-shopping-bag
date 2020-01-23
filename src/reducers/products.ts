import { DELETE_PRODUCT, LOAD_PRODUCTS, UPDATE_PRICE, UPDATE_TOTAL } from '../actions/products/constants'
import { APPLY_PROMOTION, CHECK_PROMOTION } from '../actions/promotions/constants'
import {Inital, ProductsActionType} from '../actions/products/actions.types';
import {PromotionActionType} from '../actions/promotions/actions.types';

export let InitialState: Inital = {
  items: [],
  checkoutItems: [],
  total: 0,
  discountCountedTotal: 0,
  discountedAmount: 0,
  promotions: [
    {
      'OfferCode': 'jf10',
      'DiscountPercent': 7,
    },
    {
      'OfferCode': 'pb70',
      'DiscountPercent': 2,
    },
    {
      'OfferCode': 'kl44',
      'DiscountPercent': 12,
    }
  ],
  discountsActive: {
    DiscountPercent: 0
  }
};


const products = (
  state = InitialState,
  action: PromotionActionType | ProductsActionType
) => {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      return {
        ...state,
        items: action.payload,
        total: action.payload.reduce((total, element) => (total += element.ProductPrice), 0),
        checkoutItems: action.payload.map(element => ({
          ...element,
          quantity: 1,
          ProductPrice: element.ProductPrice
        }))
      }
    }

    case DELETE_PRODUCT: {
      return {
        ...state,
        checkoutItems: state.checkoutItems.filter(item => action.payload !== item.ProductName)
      }
    }

    case UPDATE_PRICE: {

      const quantity = (action.payload.quantity > 0) ? action.payload.quantity : 1;

      return {
        ...state,
        checkoutItems: state.checkoutItems.map(element => element.ProductName === action.payload.id ? {
          ...element,
          ProductPrice: state.items[action.payload.index].ProductPrice * quantity,
          quantity: quantity
        } : element)
      }
    }

    case UPDATE_TOTAL: {

      let total = state.checkoutItems.reduce((element, item) => (element += item.ProductPrice), 0);

      return {
        ...state,
        total: total,
        discountCountedTotal: (total - state.discountedAmount).toFixed(2)
      }
    }

    case APPLY_PROMOTION: {


      let discountCheck = state.promotions.find(x => x.OfferCode === action.payload);
      let total;

      if (discountCheck) {
        total = (state.total - (discountCheck.DiscountPercent / 100 * state.total)).toFixed(2);

        return {
          ...state,
          discountsActive: discountCheck,
          discountCountedTotal: total,
          discountedAmount: (discountCheck.DiscountPercent / 100 * state.total).toFixed(2)
        };
      }
      return state
    }

    case CHECK_PROMOTION: {

      if (state.discountedAmount !== 0) {

        let discount = (state.discountsActive.DiscountPercent / 100 * state.total)

        return {
          ...state,
          discountedAmount: discount,
          discountCountedTotal: (state.total - discount).toFixed(2)
        };
      }
      return state
    }

    default:
      return state
  }
};

export default products
