import {Component} from 'react';
import LoginCard from './component/LoginCard';
import RegisterCard from './component/RegisterCard';


import {Switch,BrowserRouter,Route} from 'react-router-dom';

class App extends Component
{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path = "/Login" component={LoginCard} />
          <Route exact path = "/" component={RegisterCard} />
          <Route path = "/Register" component={RegisterCard} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
