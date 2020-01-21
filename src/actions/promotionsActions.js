const applyPromotion = (id) => (
  {
    type: 'APPLY_PROMOTION',
    payload: id
  }
);

const checkPromotion = () => (
  {
    type: 'CHECK_PROMOTION',
  }
);

export default {
  applyPromotion,
  checkPromotion
}

