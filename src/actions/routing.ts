import {push, goBack} from 'react-router-redux'

const navigate = (page: string) => (
  (dispatch: any) => {
    dispatch(push(`/${page}`))
  }
);

const navigateBack = () => (
  (dispatch: any) => {
    dispatch(goBack())
  }
);

export default {
  navigate,
  navigateBack
}
