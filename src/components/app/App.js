import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from '../Header';
import Home from '../../containers/home/Home';
import SignPage from '../../containers/register/SignPage';
import TopTweets from '../../containers/tweets/TopTweets';

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/user/:id"></Route>
          <Route path="/toptweets" component={TopTweets}></Route>
          <Route path="/register" component={SignPage}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </>
    </Router>
  );
}
