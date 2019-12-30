import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import TweetList from './components/tweet-list'
import CreateUser from './components/create-user'
import CreateTweet from './components/create-tweet'

function App() {
  return (
    <Router>
      <Route exact path="/" component={TweetList}/>
      <Route path="/user" component={CreateUser}/>
      <Route path="/tweet" component={CreateTweet} />
    </Router>
  );
}

export default App;
