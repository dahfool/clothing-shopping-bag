import {push, goBack} from 'react-router-redux'

const navigate = (page) => (
  (dispatch) => {
    dispatch(push(`/${page}`))
  }
);

const navigateBack = (page) => (
  (dispatch) => {
    dispatch(goBack(`/${page}`))
  }
);

export default {
  navigate,
  navigateBack
}
