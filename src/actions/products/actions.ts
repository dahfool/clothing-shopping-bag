import {
  ActionKeys
} from './keys'
import { ProductsActionType, Items } from './actions.types'

const loadProducts = (data: Items): ProductsActionType => ({
  type: ActionKeys.LOAD_PRODUCTS,
  payload: data
})

const deleteProduct = (id: string): ProductsActionType => ({
  type: ActionKeys.DELETE_PRODUCT,
  payload: id
})

const updatePrice = (quantity: number, id: string, index: number): ProductsActionType => ({
  type: ActionKeys.UPDATE_PRICE,
  payload: { quantity, id, index }
})

const updateTotal = (): ProductsActionType => ({
  type: ActionKeys.UPDATE_TOTAL
})

export default {
  loadProducts,
  deleteProduct,
  updatePrice,
  updateTotal
}
