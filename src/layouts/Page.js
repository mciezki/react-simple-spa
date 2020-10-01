import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage.js';
import ContactPage from '../pages/ContactPage';
import AdminPage from '../pages/AdminPage';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../pages/LoginPage';
import ProductListPage from '../pages/ProductListPage';

const Page = () => {
    return (
        <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/products' component={ProductListPage} />
            <Route path='/product/:id' component={ProductsPage} />
            <Route path='/contact' component={ContactPage} />
            <Route path='/admin' component={AdminPage} />
            <Route path='/login' component={LoginPage} />
            <Route component={ErrorPage} />
        </Switch>
    )
}

export default Page; 