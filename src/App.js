import {Component} from 'react';
import LoginCard from './component/LoginCard';
import googleIcon from './elements/googleIcon.svg';
import facebookIcon from './elements/facebookIcon.svg';
import githubIcon from './elements/githubIcon.svg';
import twitterIcon from './elements/twitterIcon.svg';
import emailIcon from './elements/emailIcon.svg';
import lockIcon from './elements/lockIcon.svg';
import devChallenge from './elements/devchallenges.svg'

class App extends Component
{
  render(){
    return(
      <LoginCard devChallenge = {devChallenge} googleIcon = {googleIcon} facebookIcon = {facebookIcon} twitterIcon = {twitterIcon} githubIcon = {githubIcon} lockIcon = {lockIcon} emailIcon = {emailIcon} />
    )
  }
}

export default App;
