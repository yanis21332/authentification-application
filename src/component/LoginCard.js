import '../App.css';

import googleIcon from '../elements/googleIcon.svg';
import facebookIcon from '../elements/facebookIcon.svg';
import githubIcon from '../elements/githubIcon.svg';
import twitterIcon from '../elements/twitterIcon.svg';
import emailIcon from '../elements/emailIcon.svg';
import lockIcon from '../elements/lockIcon.svg';
import devChallenge from '../elements/devchallenges.svg';

import {Link} from 'react-router-dom'

const LoginCard = ()=>{
    return(
        <>
            <div className = "CardContainer">
                <div className = "FirstPart">
                    <div className = "devchallengeZone">
                        <img alt = "devchallenge" src = {devChallenge}/>
                    </div>
                    <h2 className = "CardTitle">Login</h2>
                </div>
                <div className = "SecondPart FormPart">
                    <form action = "http://localhost:4000/api/auth/VerifyAccount" method="post">
                        <div className = "InputZone">
                            <img className = "InputIcon mailIcon" alt = "email" src = {emailIcon} /><input className = "button emailButton" placeholder = "Email" name = "email" type = "email"/>
                            <br/><img alt = "passIcon InputIcon" src = {lockIcon} /><input className = "button passButton" placeholder = "Password" name = "password" type = "password"/>

                            <input value = "Start coding now" type = "submit" className = "submitButton"/>
                        </div>
                        <p className = "anotherChoiceP transparentParagraphe">or continue with these social profile</p>
                        <div className = "LoginWithSocialMedia">
                             <div className = "socialMediaConnect">
                                <div className = "GoogleLogin mediaBox"><img alt = "google" src = {googleIcon}/></div>
                                <div className = "FacebookLogin mediaBox"><img alt = "facebook" src = {facebookIcon}/></div>
                                <div className = "TwitterLogin mediaBox"><img alt = "twitter" src = {twitterIcon}/></div>
                                <div className = "GithubLogin mediaBox"><img alt = "github" src = {githubIcon}/></div>
                             </div>
                             <p className = "transparentParagraphe AlreadyMemberTexte">Dont have an account yet?<Link to = "/Register" className = "BlueLoginButton">Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginCard;