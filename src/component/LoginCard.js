import '../App.css'
const LoginCard = props=>{
    return(
        <>
            <div className = "CardContainer">
                <div className = "FirstPart">
                    <div className = "devchallengeZone">
                        <img alt = "devchallenge" src = {props.devChallenge}/>
                    </div>
                    <h2 className = "CardTitle">Join thousands of learners from around the world</h2>
                    <p className = "CardText">Master web devlopement by making real-life projects. There are multiple paths for you to choose</p>
                </div>
                <div className = "SecondPart FormPart">
                    <form>
                        <div className = "InputZone">
                            <img className = "InputIcon mailIcon" alt = "email" src = {props.emailIcon} /><input className = "button emailButton" placeholder = "Email" name = "email" type = "email"/>
                            <br/><img alt = "passIcon InputIcon" src = {props.lockIcon} /><input className = "button passButton" placeholder = "Password" name = "password" type = "password"/>

                            <input value = "Start coding now" type = "submit" className = "submitButton"/>
                        </div>
                        <p className = "anotherChoiceP transparentParagraphe">or continue with these social profile</p>
                        <div className = "LoginWithSocialMedia">
                             <div className = "socialMediaConnect">
                                <div className = "GoogleLogin mediaBox"><img alt = "google" src = {props.googleIcon}/></div>
                                <div className = "FacebookLogin mediaBox"><img alt = "facebook" src = {props.facebookIcon}/></div>
                                <div className = "TwitterLogin mediaBox"><img alt = "twitter" src = {props.twitterIcon}/></div>
                                <div className = "GithubLogin mediaBox"><img alt = "github" src = {props.githubIcon}/></div>
                             </div>
                             <p className = "transparentParagraphe AlreadyMemberTexte">Already a member?<a href = "/Login" className = "BlueLoginButton">Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginCard;