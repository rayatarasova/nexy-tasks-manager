import React, { Fragment } from "react";

export default ({ users }) => (
    <Fragment>
        <h2>Users</h2>
        <ul className="list-group" style={{ marginBottom: '2rem' }}>
            {users.map(user => (
                <li className="list-group-item" key={user.user_id}>
                    {user.user_name}
                </li>
            ))}
        </ul>
    </Fragment>
);
