import '../App.css';

import axios from 'axios';

import googleIcon from '../elements/googleIcon.svg';
import facebookIcon from '../elements/facebookIcon.svg';
import githubIcon from '../elements/githubIcon.svg';
import twitterIcon from '../elements/twitterIcon.svg';
import emailIcon from '../elements/emailIcon.svg';
import lockIcon from '../elements/lockIcon.svg';
import devChallenge from '../elements/devchallenges.svg';

import {Link} from 'react-router-dom';
import { useState } from 'react';

import jwt from 'jwt-decode'

const LoginCard = ()=>{
    const [error,setError] = useState("")


    let cooks = document.cookie.split(";")

    let id = null;
    for (let index = 0; index < cooks.length; index++) {
        try {
            let a = jwt(cooks[index])
            if (a) {
                id = a.id
                //console("le cookie est valid")
            }
        } catch (err) {
            //console.error("this cookie are not valide")
        }
    }
    if(id!==null){
        document.location.href = "/homepage"
    }


    const onSubmit = (e) => {
        e.preventDefault()
        let email = document.getElementById("emailButton").value;
        let password = document.getElementById("PassButton").value;
        console.log(email)
        let info = {
            email: email,
            password: password
        }
        axios.post("https://authappback.onrender.com/VerifyAccount",info).then(res=>{
            if(!res.data.error){
                console.log("tout s'est bien passé")
                let date = new Date(Date.now() + 1000*60*60*24*3); //259200000ms = 3 jour
                document.cookie = `user=${res.data.userID}; path=/; expires=` + date;
                setError("")
                document.location.href = "/homepage"
            }else{
                console.error(res.data.error)
                setError(res.data.error)
            }
        }).catch(err=>{
            console.error("erreur : " + err)
            setError("une erreur s'est produite !")
        })
    }
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
                    <form onSubmit={onSubmit}>
                        <div className = "InputZone">
                            <img className = "InputIcon mailIcon" alt = "email" src = {emailIcon} /><input id = "emailButton" className = "button emailButton" placeholder = "Email" name = "email" type = "email"/>
                            <br/><img alt = "passIcon InputIcon" src = {lockIcon} /><input id = "PassButton"  className = "button passButton" placeholder = "Password" name = "password" type = "password"/>
                            {error!==""&&<p style={{
                                    color: "red",
                                    fontWeight: "500",
                                    opacity: "0.8",
                                    fontSize: "0.799em"
                            }} id='signinError254'>{error}</p>}
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