import React from 'react';
import LoginPage from '../pages/LoginPage/index';
import RegisterPage from '../pages/RegisterPage/index';
import FeedPage from '../pages/FeedPage/index';
import PostPage from '../pages/PostPage/index';
import ErrorPage from '../pages/ErrorPage/index';
import AddPostPage from '../pages/AddPostPage/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Router = () => {
    return (
        <BrowserRouter>  
            <Switch>
                <Route exact path={'/login', '/'}>
                    <LoginPage />
                </Route>

                <Route exact path={'/cadastro'}>
                    <RegisterPage />
                </Route>

                <Route exact path={'/feed'}>
                    <FeedPage />
                </Route>

                <Route exact path={'/post/:id'}>
                    <PostPage />
                </Route>

                <Route exact path={'/adicionarPost'}>
                    <AddPostPage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router