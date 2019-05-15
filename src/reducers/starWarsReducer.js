import { 
  FETCH_SWAP_START,
  FETCH_SWAP_START,
  FETCH_SWAP_FAILURE, 
  FETCH_SWAP_SUCCESS,
  FETCH_SWAP_FAILURE
} from "../actions";

const initialState = {
  characters: [],
  isFetching: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SWAP_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_SWAP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        characters: action.payload
      };
    case FETCH_SWAP_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};
