import React from 'react'

export interface Item {
  ProductName: string
  Gender?: string,
  ProductPrice: number,
  DiscountPercent?: number,
  ImageName: string
}

export interface ItemFunc {
  onChange: (e: React.ChangeEvent<HTMLInputElement>, name: string, index: number) => void,
  deleteProduct: (e: React.MouseEvent<HTMLButtonElement>, product: string) => void
}

export interface Props extends Item, ItemFunc {
  index: number
}
