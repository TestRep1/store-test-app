import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop-page';
import Header from './components/header/header';
import SigninSignupPage from './pages/singin-signup-page/signin-signup-page';
import { auth, createUserProfile } from './utils/FirebaseUtil';


import './App.css';

const Hats = () => (
  <h1>HATS</h1>
)

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const authUnsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        })
      } else {
        setCurrentUser(null);
      }
    })

    return () => {
      authUnsubscribe();
    }
  }, [])



  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/hats" component={ShopPage} />
        <Route path="/login" component={SigninSignupPage} />
      </Switch>

    </div>
  );
}

export default App;
