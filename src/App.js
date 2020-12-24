import './App.css';
import {Switch, Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop-page';

const Hats = () => (
  <h1>HATS</h1>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop/hats" component={ShopPage}/>
      </Switch>
     
    </div>
  );
}

export default App;
