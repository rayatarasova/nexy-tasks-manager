export function fetchUsersRequest() {
  return fetch('https://jsonplaceholder.typicode.com/posts').then(response =>
    response.json()
  );
}


