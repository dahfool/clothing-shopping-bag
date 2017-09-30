import { push, goBack } from 'react-router-redux'

export const navigate = (page) => (
    (dispatch) => {
        dispatch(push(`/${page}`))
    }
);

export const navigateBack = (page) => (
    (dispatch) => {
        dispatch(goBack(`/${page}`))
    }
);
