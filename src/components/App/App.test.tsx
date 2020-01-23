import React from 'react'
import {shallow} from 'enzyme';
import App from './App'
import ShopItemList from '../ShopItemList/ShopItemList'

const data = [
  {
    "ProductName": "Solid Green Cotton t-shirt",
    "Gender": "Male",
    "ProductPrice": 11,
    "DiscountPercent": 5,
    "ImageName": "T1.jpg"
  },
  {
    "ProductName": "Pink Rainbow Print Girls Tee",
    "Gender": "Female",
    "ProductPrice": 17,
    "DiscountPercent": 2,
    "ImageName": "T2.jpg"
  }
]

const setup = (products = data) => {

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
