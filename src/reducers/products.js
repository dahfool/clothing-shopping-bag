const discounts = (state = {
                    items: [],
                },
                action) => {
    switch (action.type) {
        case 'LOAD_PRODUCTS':
            return {
                ...state,
                items: action.payload
            };
        default:
            return state
    }
};

export default discounts;
