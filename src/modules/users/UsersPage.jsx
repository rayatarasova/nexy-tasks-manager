import React, { Fragment } from 'react';
import UsersCreateContainer from './containers/UsersCreateContainer';
import UsersListContainer from './containers/UsersListContainer';

const UsersPage = () => (
    <Fragment>
        <h1 className="h2">Users</h1>
        <UsersCreateContainer/>
        <UsersListContainer />
    </Fragment>
);

export default UsersPage;
