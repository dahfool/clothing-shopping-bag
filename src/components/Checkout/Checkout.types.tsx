import React from 'react'

export interface Promotion {
  promotion: {
    DiscountPercent: number
  }
}

export interface LinkStateProps extends Promotion{
  total: number
  discountedTotal: number
  discountedAmount: number
}

export interface LinkDispatchProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement> ) => void
  applyPromotion: (e: React.FormEvent<HTMLFormElement>) => void
}

export interface Props extends LinkDispatchProps, LinkStateProps {}

