let InitialState = {
    items: [],
    checkoutItems: [],
    total: null,
    discountCountedTotal: null,
    discountedAmount: '0.00',
    promotions: [
        {
            "OfferCode": "jf10",
            "DiscountPercent": "7",
        },
        {
            "OfferCode": "pb70",
            "DiscountPercent": "2",
        },
        {
            "OfferCode": "kl44",
            "DiscountPercent": "12",
        }
    ],
    discountsActive: {
        DiscountPercent: 0
    }
};



const products = (state = InitialState, action) => {
    switch (action.type) {
        case 'LOAD_PRODUCTS': {

            let total = 0;
            action.payload.map(element => (total +=parseInt(element.ProductPrice, 0)));

            return {
                ...state,
                items: action.payload,
                total: total,
                checkoutItems: action.payload.map(element => ({
                    ...element,
                    quantity : 1,
                    ProductPrice : parseInt(element.ProductPrice, 0).toFixed(2)
                }))
            };
        }

        case 'DELETE_PRODUCT': {
            return {
                ...state,
                checkoutItems: state.checkoutItems.filter(item => action.payload !== item.ProductName)
            };
        }

        case 'UPDATE_PRICE': {

            const quantity = (action.payload.quantity > 0) ? action.payload.quantity : 1;

            return {
                ...state,
                checkoutItems: state.checkoutItems.map(element => element.ProductName === action.payload.id ? {...element, ProductPrice : (state.items[action.payload.index].ProductPrice * quantity).toFixed(2), quantity: quantity } : element)
            }
        }

        case 'UPDATE_TOTAL': {

            let total = 0;
            state.checkoutItems.map(element => (total +=parseInt(element.ProductPrice, 0)));

            return {
                ...state,
                total: total.toFixed(2),
                discountCountedTotal: (total - state.discountedAmount).toFixed(2)
            }
        }

        case 'APPLY_PROMOTION': {


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

        case 'CHECK_PROMOTION': {

            if(state.discountedAmount !== '0.00') {

                let discount = (state.discountsActive.DiscountPercent / 100 * state.total).toFixed(2)

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

export default products;
