import { ItemFunc } from '../ShopItem/Shopitem.types'
import {Items as ItemList} from '../../actions/products/actions.types';

export interface Items {
  items: ItemList
}

export interface Props extends Items, ItemFunc {}

