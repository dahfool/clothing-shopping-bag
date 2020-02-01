import {
  ActionKeys
} from './keys'
import { PromotionActionType } from './actions.types'

const applyPromotion = (id: string): PromotionActionType => ({
  type: ActionKeys.APPLY_PROMOTION,
  payload: id
})

const checkPromotion = (): PromotionActionType => ({
  type: ActionKeys.CHECK_PROMOTION
})

export default {
  applyPromotion,
  checkPromotion
}

