import React from 'react'
import {Item} from '../ShopItem/Shopitem.types'
import {Items} from '../../actions/products/actions.types';

export interface Products {
  products: Items
}

export interface LinkDispatchProps {
  loadProducts: (data: Item[]) => void,
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>, page: string ) => void,
  onChange: (e: React.ChangeEvent<HTMLInputElement>, name: string, index: number) => void,
  deleteProduct: (e: React.MouseEvent<HTMLButtonElement>, product: string) => void
}

export interface Props extends Products , LinkDispatchProps {}
