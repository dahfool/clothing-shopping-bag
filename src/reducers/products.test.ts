import products, {InitialState} from './products'
import data from '../data/products.json';
import {ActionKeys} from "../actions/products/keys";

describe('Producer reducer', () => {

  it('should show initial state of producer reducer', () => {
    expect(products(undefined, {type: ActionKeys.INIT})).toEqual({
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
    });
  });

  it('should load products to reducer', () => {
    let items = products({...InitialState}, {type: ActionKeys.LOAD_PRODUCTS, payload: data});
    expect(items.items.length).toBeGreaterThan(0)
  })

});
