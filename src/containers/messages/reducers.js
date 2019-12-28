import {
  MESSAGES_REQUEST,
  MESSAGES_SUCCESS,
  MESSAGES_FAILURE,
  MESSAGES_CREATE,
} from './constants';

export const initialState = {
  list: [],
  fetch: 0,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MESSAGES_REQUEST:
      return {...state, loading: true};
    case MESSAGES_SUCCESS:
      return {
        ...state,
        list: action.payload,
        fetch: state.fetch + 1,
        loading: false,
      };
    case MESSAGES_FAILURE:
      return {...state, loading: false};
    case MESSAGES_CREATE:
      return {
        ...state,
        list: [...state.list, action.data],
      };
    default:
      return state;
  }
};
