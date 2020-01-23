import {
  DELETE_PRODUCT,
  LOAD_PRODUCTS,
  UPDATE_PRICE,
  UPDATE_TOTAL
} from './constants'
import { ProductsActionType, Items } from './actions.types'

const loadProducts = (data: Items): ProductsActionType => ({
  type: LOAD_PRODUCTS,
  payload: data
})

const deleteProduct = (id: string): ProductsActionType => ({
  type: DELETE_PRODUCT,
  payload: id
})

const updatePrice = (quantity: number, id: string, index: number): ProductsActionType => ({
  type: UPDATE_PRICE,
  payload: { quantity, id, index }
})

const updateTotal = (): ProductsActionType => ({
  type: UPDATE_TOTAL
})

export default {
  loadProducts,
  deleteProduct,
  updatePrice,
  updateTotal
}
