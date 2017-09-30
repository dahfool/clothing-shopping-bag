export const applyPromotion = (id) => (
    {
        type: 'APPLY_PROMOTION',
        payload: id
    }
);

export const checkPromotion = () => (
    {
        type: 'CHECK_PROMOTION',
    }
);

