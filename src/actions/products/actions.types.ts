import {
  DELETE_PRODUCT,
  UPDATE_PRICE,
  UPDATE_TOTAL,
  LOAD_PRODUCTS
} from './constants'
import {Promotion} from '../promotions/actions.types'
import { Item } from '../../components/ShopItem/Shopitem.types'

export type Items = Item[]

export interface Inital {
  items: Items,
  checkoutItems: Items,
  total: number
  discountCountedTotal: number,
  discountedAmount: number,
  promotions: Promotion[]
  discountsActive: {
    DiscountPercent: number
  }
}

export interface LoadProductsAction {
  type: typeof LOAD_PRODUCTS
  payload: Items
}

export interface DeleteAction {
  type: typeof DELETE_PRODUCT
  payload: string
}

export interface UpdatePriceAction {
  type: typeof UPDATE_PRICE
  payload: {
    quantity: number
    id: string
    index: number
  }
}

export interface UpdateTotalAction {
  type: typeof UPDATE_TOTAL
}

export type ProductsActionType = LoadProductsAction | DeleteAction | UpdateTotalAction | UpdatePriceAction
