import {
  USER_LOAD_REQUEST,
  USER_LOAD_SUCCESS,
  USER_LOAD_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
} from './constants';

const initialState = {
  data: {},
  fetch: 0,
  loading: false,
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOAD_REQUEST:
      return {...state, loading: true};
    case USER_LOAD_SUCCESS:
      return {
        ...state,
        data: action.payload || {},
        fetch: state.fetch + 1,
        loading: false,
      };
    case USER_LOAD_FAILURE:
      return {...state, loading: false};
    case SIGN_IN_REQUEST:
      return {...state, loading: true};
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        loading: false,
      };
    case SIGN_IN_FAILURE:
      return {...state, loading: false};
    default:
      return state;
  }
};
