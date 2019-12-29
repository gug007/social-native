import {
  CHATS_LOAD_REQUEST,
  CHATS_LOAD_SUCCESS,
  CHATS_LOAD_FAILURE,
  CHATS_CREATE_REQUEST,
  CHATS_CREATE_SUCCESS,
  CHATS_CREATE_FAILURE,
} from './constants';

export const initialState = {
  list: [],
  fetch: 0,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHATS_LOAD_REQUEST:
      return {...state, loading: true};
    case CHATS_LOAD_SUCCESS:
      return {
        ...state,
        list: action.payload || [],
        fetch: state.fetch + 1,
        loading: false,
      };
    case CHATS_LOAD_FAILURE:
      return {...state, loading: false};
    case CHATS_CREATE_REQUEST:
      return {...state, saving: true};
    case CHATS_CREATE_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        fetch: state.fetch + 1,
        saving: false,
      };
    case CHATS_CREATE_FAILURE:
      return {...state, saving: false};
    default:
      return state;
  }
};
