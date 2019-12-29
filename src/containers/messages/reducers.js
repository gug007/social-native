import {
  MESSAGES_LOAD_REQUEST,
  MESSAGES_LOAD_SUCCESS,
  MESSAGES_LOAD_FAILURE,
  MESSAGES_CREATE_REQUEST,
  MESSAGES_CREATE_SUCCESS,
  MESSAGES_CREATE_FAILURE,
} from './constants';

export const initialState = {
  ids: {},
  fetch: 0,
  loading: false,
  saving: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MESSAGES_LOAD_REQUEST:
      return {...state, loading: true};
    case MESSAGES_LOAD_SUCCESS:
      return {
        ...state,
        ids: {[action.chatId]: action.payload},
        fetch: state.fetch + 1,
        loading: false,
      };
    case MESSAGES_LOAD_FAILURE:
      return {...state, loading: false};
    case MESSAGES_CREATE_REQUEST:
      return {...state, saving: true};
    case MESSAGES_CREATE_SUCCESS:
      return {
        ...state,
        ids: {
          ...state.ids,
          [action.payload.chatId]: [
            ...state.ids[action.payload.chatId],
            action.payload,
          ],
        },
        fetch: state.fetch + 1,
        saving: false,
      };
    case MESSAGES_CREATE_FAILURE:
      return {...state, saving: false};
    default:
      return state;
  }
};
