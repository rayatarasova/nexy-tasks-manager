import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL } from "../constants/actionTypes";

export function fetchUsers() {
  return { type: FETCH_USERS };
}

export function fetchUsersSuccess(payload) {
  return { type: FETCH_USERS_SUCCESS, payload };
}

export function fetchUsersError() {
  return { type: FETCH_USERS_FAIL };
}
