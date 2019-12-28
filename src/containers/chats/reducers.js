import {
  CHATS_REQUEST,
  CHATS_SUCCESS,
  CHATS_FAILURE,
  CHATS_CREATE,
} from './constants';

export const initialState = {
  list: [],
  fetch: 0,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHATS_REQUEST:
      return {...state, loading: true};
    case CHATS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        fetch: state.fetch + 1,
        loading: false,
      };
    case CHATS_FAILURE:
      return {...state, loading: false};
    case CHATS_CREATE:
      return {
        ...state,
        list: [...state.list, action.data],
      };
    default:
      return state;
  }
};
