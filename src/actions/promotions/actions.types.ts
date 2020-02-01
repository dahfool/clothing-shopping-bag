import {
  ActionKeys
} from './keys'

export interface Promotion {
  OfferCode: string
  DiscountPercent: number
}

export interface ApplyPromotionAction {
  type: ActionKeys.APPLY_PROMOTION,
  payload: string
}

export interface CheckPromotionAction {
  type: ActionKeys.CHECK_PROMOTION
}

export type PromotionActionType = ApplyPromotionAction | CheckPromotionAction
