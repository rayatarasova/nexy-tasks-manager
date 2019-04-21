import React, { Fragment } from 'react';
import UsersCreateContainer from './containers/UsersCreateContainer';
import UsersListContainer from './containers/UsersListContainer';

const UsersPage = () => (
    <Fragment>
        <UsersCreateContainer/>
        <UsersListContainer />
    </Fragment>
);

export default UsersPage;
