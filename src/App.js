import {Component, useState} from 'react';
import LoginCard from './component/LoginCard';
import RegisterCard from './component/RegisterCard';
import ErrorPage from './component/ErrorPage';
import HomePage from './component/HomePage';
import UserImage from './elements/UserImage.jfif';
import EditHomePage from './component/EditHomePage';
import Arrow from './elements/DownArrow.svg';

import {Switch,BrowserRouter,Route} from 'react-router-dom';


const App = ()=>{
  const [allstate,setAllstate] = useState({
    UserName: "",
    UserPhoto: UserImage,
    arrowImage: Arrow,
    bio : "",
    phone: "",
    email: "",
    password: "****************"
  })

  return(
    <BrowserRouter>
      <Switch>
        <Route path = "/Login" component={LoginCard} exact />
        <Route path = "/Login/" component={LoginCard} exact />
        <Route exact path = "/" component={RegisterCard} />
        <Route path = "/Register" component={RegisterCard} />
        <Route strict exact path = "/HomePage"><HomePage allstate={allstate} setAllstate={setAllstate} /></Route>
        <Route strict exact path = "/HomePage/"><HomePage allstate={allstate} setAllstate={setAllstate} /></Route>
        
        <Route exact path = "/HomePage/EditHomePage"><EditHomePage allstate={allstate} setAllstate={setAllstate} /></Route>
        <Route exact path = "/HomePage/EditHomePage/"><EditHomePage allstate={allstate} setAllstate={setAllstate} /></Route>

        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  )
}
export default App;
