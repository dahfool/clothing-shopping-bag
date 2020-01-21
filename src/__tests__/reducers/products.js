import products from '../../reducers/products'
import data from '../../data/products.json';


describe('Producer reducer', () => {

  it('should show initial state of producer reducer', () => {
    expect(products(undefined, {type: '@@INIT'})).toEqual({
      items: [],
      checkoutItems: [],
      total: null,
      discountCountedTotal: null,
      discountedAmount: '0.00',
      promotions: [
        {
          'OfferCode': 'jf10',
          'DiscountPercent': '7',
        },
        {
          'OfferCode': 'pb70',
          'DiscountPercent': '2',
        },
        {
          'OfferCode': 'kl44',
          'DiscountPercent': '12',
        }
      ],
      discountsActive: {
        DiscountPercent: 0
      }
    });
  });

  it('should load products to reducer', () => {
    let items = products({}, {type: 'LOAD_PRODUCTS', payload: data});
    expect(items.items.length).toBeGreaterThan(0)
  });

});
