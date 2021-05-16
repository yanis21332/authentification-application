import {Component} from 'react';
import LoginCard from './component/LoginCard';
import RegisterCard from './component/RegisterCard';
import ErrorPage from './component/ErrorPage';
import HomePage from './component/HomePage';
import EditHomePage from './component/EditHomePage';

import {Switch,BrowserRouter,Route} from 'react-router-dom';

class App extends Component
{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path = "/Login" component={LoginCard} exact />
          <Route path = "/Login/" component={LoginCard} exact />
          <Route exact path = "/" component={RegisterCard} />
          <Route path = "/Register" component={RegisterCard} />
          <Route strict exact path = "/HomePage" component = {HomePage}/>
          <Route strict exact path = "/HomePage/" component = {HomePage}/>
          <Route exact path = "/HomePage/EditHomePage" component = {EditHomePage}/>
          <Route exact path = "/HomePage/EditHomePage/" component = {EditHomePage}/>
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
