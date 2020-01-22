import {
  APPLY_PROMOTION,
  CHECK_PROMOTION
} from './constants'

export interface Promotion {
  OfferCode: string
  DiscountPercent: number
}

export interface ApplyPromotionAction {
  type: typeof APPLY_PROMOTION,
  payload: string
}

export interface CheckPromotionAction {
  type: typeof CHECK_PROMOTION
}

export type PromotionActionType = ApplyPromotionAction | CheckPromotionAction
