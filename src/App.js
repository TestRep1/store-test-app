import './App.css';
import {Switch, Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage';

const Hats = () => (
  <h1>HATS</h1>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop/hats" component={Hats}/>
      </Switch>
     
    </div>
  );
}

export default App;
