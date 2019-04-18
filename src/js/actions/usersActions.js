import { FETCH_USERS, FETCH_USERS_SUCCESS, POST_USERS } from "../constants/actionTypes";

export function fetchUsersAction() {
  return { type: FETCH_USERS };
}

export function fetchUsersSuccessAction(payload) {
  return { type: FETCH_USERS_SUCCESS, payload };
}

export function postsUsersAction(payload) {
  return { type: POST_USERS, payload };
}
