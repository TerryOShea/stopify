import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import HomeContainer from './home/home_container';
import SignupContainer from './signup/signup_container';
import LoginContainer from './login/login_container';
import AccountContainer from './account/account_container';

const Root = ({ store, location }) => {
  console.log("location: ");
  console.log(location);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/signup" component={SignupContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/account" component={AccountContainer} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
