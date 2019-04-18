import { FETCH_USERS_SUCCESS } from "../constants/actionTypes";

const initialState = {
  articles: [],
  remoteArticles: []
};

function usersReducer(state = initialState, action) {
  if (action.type === FETCH_USERS_SUCCESS) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }
  return state;
}

export default usersReducer;
