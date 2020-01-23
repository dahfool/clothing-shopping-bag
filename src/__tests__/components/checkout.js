import React from 'react'
import {render} from 'react-dom'
import {shallow} from 'enzyme';
import Checkout from '../../components/Checkout/Checkout'
import Promotion from '../../components/Promotion/Promotion'

const setup = (total = '', promotion = {}, discountedTotal = '', discountedAmount = '') => {

  const actions = {
    onClick: jest.fn(),
    applyPromotion: jest.fn()
  };

  const component = shallow(<Checkout total={total} promotion={promotion} discountedTotal={discountedTotal}
                                      discountedAmount={discountedAmount} {...actions} />);

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
