import React from "react";

export default ({ users }) => (
    <ul className="list-group list-group-flush">
        {users.map(user => (
            <li className="list-group-item" key={user.user_id}>
                {user.user_name}
            </li>
        ))}
    </ul>
);
