import React from 'react'
import {shallow} from 'enzyme';
import App from '../../components/App/App'
import ShopItemList from '../../components/ShopItemList/ShopItemList'

const setup = (products = {items: []}) => {

  const actions = {
    deleteProduct: jest.fn(),
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    loadProducts: jest.fn()
  };

  const component = shallow(<App products={products} {...actions} />);

  return {
    component,
    button: component.find('button'),
    ShopItemList: component.find(ShopItemList)
  }

};

describe('App component', () => {

  it('should render App', () => {
    const {component} = setup();
    expect(component.length).toEqual(1)
  });

  it('should have a button', () => {
    const {button} = setup();
    expect(button.length).toEqual(1)
  });

  it('should have a ShopItemList', () => {
    const {ShopItemList} = setup();
    expect(ShopItemList.length).toEqual(1)
  })

});
