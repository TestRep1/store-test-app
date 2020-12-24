import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop-page';
import Header from './components/header/header';

const Hats = () => (
  <h1>HATS</h1>
)

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/hats" component={ShopPage} />
      </Switch>

    </div>
  );
}

export default App;
