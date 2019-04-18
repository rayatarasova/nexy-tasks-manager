import React from "react";
import { Link } from 'react-router-dom';
import Post from "./Posts";

const Users = () => (
    <div>
        <Link to="tasks">Tasks</Link>
        <div className="row mt-5">
            <div className="col-md-12 offset-md-1">
                <h2>Users</h2>
                <Post />
            </div>
        </div>
    </div>
);

export default Users;
