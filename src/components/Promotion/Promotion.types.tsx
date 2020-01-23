import React from 'react'

import { Promotion } from '../Checkout/Checkout.types'

export interface Props extends Promotion {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}
