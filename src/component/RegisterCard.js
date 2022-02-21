import {useState} from 'react';
import googleIcon from '../elements/googleIcon.svg';
import facebookIcon from '../elements/facebookIcon.svg';
import githubIcon from '../elements/githubIcon.svg';
import twitterIcon from '../elements/twitterIcon.svg';
import emailIcon from '../elements/emailIcon.svg';
import lockIcon from '../elements/lockIcon.svg';
import devChallenge from '../elements/devchallenges.svg';
import axios from 'axios';

import jwt from 'jwt-decode';

import {Link} from 'react-router-dom';


const RegisterCard = ()=>{

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
    



    const OnFormSubmit = e => {
        e.preventDefault();

        let email = document.getElementById("EmailInput").value;
        let password = document.getElementById("PasswordInput").value;
        const info = {
            email: email,
            password: password
        }
        console.log(info)
        console.log(document.getElementById("EmailInput"));
        axios.post("https://authappback.onrender.com/newAccount",info).then(res=>{
            if(!res.data.error){
                console.log(res.data)
                setError("")
                document.location.href = "/login"
            }else{
                console.log("une erreur :" + res.data.error)
                setError(res.data.error)
            }
        }).catch(err=>{
	        console.log("erreur quelque part: "+err);
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
                    <h2 className = "CardTitle">Join thousands of learners from around the world</h2>
                    <p className = "CardText">Master web devlopement by making real-life projects. There are multiple paths for you to choose</p>
                </div>
                <div className = "SecondPart FormPart">
                    <form onSubmit = {OnFormSubmit} action = "https://authappback.onrender.com/api/auth/newAccount" method="post">
                        <div className = "InputZone">
                            <img className = "InputIcon mailIcon" alt = "email" src = {emailIcon} /><input id = "EmailInput" className = "button emailButton" placeholder = "Email" name = "email" type = "email"/>
                            <br/><img alt = "passIcon InputIcon" src = {lockIcon} /><input id ="PasswordInput" className = "button passButton" placeholder = "Password" name = "password" type = "password"/>

                            {error!==""&&<p style={{
                                    color: "red",
                                    fontWeight: "500",
                                    opacity: "0.8",
                                    fontSize: "0.799em"
                            }} id='signupError254'>{error}</p>}
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
                             <p className = "transparentParagraphe AlreadyMemberTexte">Already a member?<Link to = "/Login" className = "BlueLoginButton">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterCard;