import React from 'react'
import {shallow} from 'enzyme';
import Checkout from './Checkout'
import Promotion from '../Promotion/Promotion'

const setup = (total = 10, promotion = { DiscountPercent: 0}, discountedTotal = 0, discountedAmount = 0) => {

  const actions = {
    onClick: jest.fn(),
    applyPromotion: jest.fn()
  };

  const component = shallow(<Checkout
    total={total}
    promotion={promotion}
    discountedTotal={discountedTotal}
    discountedAmount={discountedAmount}
    {...actions}
  />);

  return {
    component,
    actions,
    button: component.find('button'),
    Promotion: component.find(Promotion)
  }

};

describe('Checkout component', () => {

  it('should render Checkout', () => {
    const {component} = setup();
    expect(component.length).toEqual(1)
  });

  it('should have a promotion component', () => {
    const {Promotion} = setup();
    expect(Promotion.length).toEqual(1)
  });

  it('should fire continue shopping action', () => {
    const {actions, button} = setup();
    button.at(0).simulate('click');
    expect(actions.onClick).toBeCalled();
  });


});
