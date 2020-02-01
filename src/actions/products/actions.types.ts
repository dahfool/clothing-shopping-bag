import {
  ActionKeys
} from './keys'
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
  type: ActionKeys.LOAD_PRODUCTS
  payload: Items
}

export interface DeleteAction {
  type: ActionKeys.DELETE_PRODUCT
  payload: string
}

export interface UpdatePriceAction {
  type: ActionKeys.UPDATE_PRICE
  payload: {
    quantity: number
    id: string
    index: number
  }
}

export interface UpdateTotalAction {
  type: ActionKeys.UPDATE_TOTAL
}


export interface InitialLoad {
  type:  ActionKeys.INIT
}

export type ProductsActionType = LoadProductsAction | DeleteAction | UpdateTotalAction | UpdatePriceAction | InitialLoad
