import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

export default ({ users }) => (
    <Fragment>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3">
            <h2 className="h2">Tasks</h2>
            <div className="btn-toolbar mb-2 mb-md-0">
                <Link to="/users/create" className="btn btn-sm btn-primary">Create</Link>
            </div>
        </div>
        
        <ul className="list-group" style={{ marginBottom: '2rem' }}>
            {users.map(user => (
                <li className="list-group-item" key={user.user_id}>
                    {user.user_name}
                </li>
            ))}
        </ul>
    </Fragment>
);
