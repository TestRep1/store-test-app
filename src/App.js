import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop-page';
import CheckoutPage from './pages/checkout/checkout-page';
import Header from './components/header/header';
import SigninSignupPage from './pages/singin-signup-page/signin-signup-page';
import { auth, createUserProfile } from './utils/FirebaseUtil';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';

import './App.css';


const App = ({ currentUser, setCurrentUser }) => {

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
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/login" render={() => currentUser ? <Redirect to="/" /> : <SigninSignupPage />} />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>

    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
