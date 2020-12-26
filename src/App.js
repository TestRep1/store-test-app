import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop-page';
import Header from './components/header/header';
import SigninSignupPage from './pages/singin-signup-page/signin-signup-page';
import { auth, createUserProfile } from './utils/FirebaseUtil';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';


import './App.css';

const Hats = () => (
  <h1>HATS</h1>
)

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
        <Route path="/shop/hats" component={ShopPage} />
        <Route exact path="/login" render={() => currentUser? <Redirect to="/" /> : <SigninSignupPage />} />
      </Switch>

    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
