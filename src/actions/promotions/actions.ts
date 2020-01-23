import {
  APPLY_PROMOTION,
  CHECK_PROMOTION
} from './constants'
import { PromotionActionType } from './actions.types'

const applyPromotion = (id: string): PromotionActionType => ({
  type: APPLY_PROMOTION,
  payload: id
})

const checkPromotion = (): PromotionActionType => ({
  type: CHECK_PROMOTION
})

export default {
  applyPromotion,
  checkPromotion
}

