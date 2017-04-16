import React from 'react';
import UserList from '../Containers/user-list'
import UserDetail from '../Containers/user-detail'
require('../../scss/style.scss');


const App = () => (
  <div>
    <h2>Username list:</h2>
    <UserList />
    <hr/>
    <h2>User Details:</h2>
    <UserDetail />
  </div>
);

export default App;
