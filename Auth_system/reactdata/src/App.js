import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import ResetPassword from "./containers/ResetPassword";
import ResetPasswordConfirm from "./containers/ResetPasswordConfirm";
import Activate from "./containers/Activate";
import { Provider } from 'react-redux';
import store from './store';

const App = () => { 
  return (
    <Provider store={store}>

   
        <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} exact />
                <Route path="/login" element={<Layout><Login /></Layout>} />
                <Route path="/signup" element={<Layout><Signup /></Layout>} />
                <Route path="/reset_password" element={<Layout><ResetPassword /></Layout>} />
                <Route path="/password/reset/confirm/:uid/:token" element={<Layout><ResetPasswordConfirm /></Layout>} />
                <Route path="/activate/:uid/:token" element={<Layout><Activate /></Layout>} />
        </Routes>
  </Provider>
  );
};

export default App;