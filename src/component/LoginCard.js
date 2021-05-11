
const LoginCard = props=>{
    return(
        <>
            <div className = "CardContainer">
                <div className = "FirstPart">
                    <div className = "devchallengeZone">
                        <img alt = "devchallenge" src = {props.devchallengelogo}/>
                    </div>
                    <h2 className = "CardTitle">Join thousands of learners from around the world</h2>
                    <p className = "CardText">Master web devlopement by making real-life projects. There are multiple paths for you to choose</p>
                </div>
                <div className = "SecondPart FormPart">
                    <form>
                        <div className = "InputZone">
                            <input className = "button emailButton" placeholder = "Email" name = "email" type = "email"/>
                            <input className = "button passButton" placeholder = "Password" name = "password" type = "password"/>

                            <input type = "submit" className = "submitButton"/>
                        </div>
                        <p className = "anotherChoiceP transparentParagraphe">or continue with these social profile</p>
                        <div className = "LoginWithSocialMedia">
                             <div className = "socialMediaConnect">
                                <div className = "GoogleLogin"><img alt = "google" src = {props.googleIcon}/></div>
                                <div className = "FacebookLogin"><img alt = "facebook" src = {props.facebookIcon}/></div>
                                <div className = "TwitterLogin"><img alt = "twitter" src = {props.twitterIcon}/></div>
                                <div className = "GithubLogin"><img alt = "github" src = {props.githubIcon}/></div>
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