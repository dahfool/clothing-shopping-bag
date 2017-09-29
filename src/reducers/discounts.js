const discounts = (state = {
                    items: [],
                },
                action) => {
    switch (action.type) {
        case 'DISCOUNT_PRODUCT':
            return {...state};
        default:
            return state
    }
};

export default discounts;
