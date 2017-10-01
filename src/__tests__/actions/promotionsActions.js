import promotion from '../../actions/promotionsActions'


describe('Promotions actions', () => {

    it('should return id to apply promotion', () => {
        expect(promotion.applyPromotion(2)).toEqual({
            type: 'APPLY_PROMOTION',
            payload: 2
        });
    });

    it('Should return check promotion type', ()=> {
        expect(promotion.checkPromotion()).toEqual({ type: 'CHECK_PROMOTION' });
    });

});

