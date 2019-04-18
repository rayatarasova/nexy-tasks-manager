import React from "react";
import List from "./List";
import { Link } from 'react-router-dom';
import Form from "./Form";

const Tasks = () => (
    <div>
        <Link to="users">Users</Link>
        <div className="row mt-5">
            <div className="col-md-6 offset-md-1">
                <h2>Articles</h2>
                <List />
            </div>
            <div className="col-md-6 offset-md-1">
                <h2>Add a new article</h2>
                <Form />
            </div>
        </div>
    </div>
);

export default Tasks;
