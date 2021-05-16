import { Component } from 'react';
import devChallengeLogo from '../elements/devchallenges.svg';
import Arrow from '../elements/DownArrow.svg';
import UserImage from '../elements/UserImage.jfif';
import ProfilePopup from '../component/ProfilePopup';
import {Link} from 'react-router-dom';
import LeftArrowLogo from '../elements/LeftArrowLogo.svg';
import CameraImage from '../elements/camera.svg';

import './style.css';

const OnClickInArrow = e => {
    let ProfilePopup = document.querySelector(".ProfilePopup")
    ProfilePopup.classList.remove("none")
    if(e.target.classList[0]==="UpArrow"){
        e.target.classList.replace("UpArrow","DownArrow")
        if(ProfilePopup.classList[2]==="InversePopupAnimation"){
            ProfilePopup.classList.remove("InversePopupAnimation");
        }
        
    }else if(e.target.classList[0]==="Uparrow"){
        e.target.classList.replace("Uparrow","DownArrow")
        if(ProfilePopup.classList[2]==="InversePopupAnimation"){
            ProfilePopup.classList.remove("InversePopupAnimation");
        }
    }
    else{
        e.target.classList.replace("DownArrow","UpArrow")
        if(!ProfilePopup.classList[2]){
            ProfilePopup.classList.add("InversePopupAnimation");
        }
    }
}

class EditHomePage extends Component{
    state = {
        UserName: "Yanis Kerrouche",
        UserPhoto: UserImage,
        arrowImage: Arrow,
        bio : "it's me yanos kerrpiche ",
        phone: "0662574942",
        email: "kerroucheker@gmail.com",
        password: "****************"
    }
    render(){
        return(
            <>
                <header>
                    <div className = "devchallengeLogo">
                        <img alt = "devchallenges" src = {devChallengeLogo} />
                    </div>
                    <div className = "UserProfileLink">
                        <div className = "UserMedia">
                            <img className = "UserPhoto" alt = "userPhoto" src = {this.state.UserPhoto}/>
                        </div>
                        <p className = "UserName">{this.state.UserName}</p>
                        <img onClick = {OnClickInArrow} className = "Uparrow reactif" alt = "arrow" src = {this.state.arrowImage} />
                    </div>
                </header>

                <section className = "ModifyProfileSection">
                    <div className = "GoBackLink">
                        <Link to = "/HomePage"><img alt = "GoBackLink" src = {LeftArrowLogo} />Back</Link>
                    </div>
                    <div className = "ContainerBox">
                        <div className = "Introduction">
                            <h3>Change Info</h3>
                            <p>Changes will be reflected to every services</p>
                        </div>
                        <div className = "FormZone">
                            <form>
                                <div className = "PhotoChanger">
                                    <div className = "PhotoBloc">
                                        <img className = "UserPhoto" alt = "User photo" src = {this.state.UserPhoto} />
                                        <div className = "Darker"></div>
                                        <img className = "cameraPhoto" alt = "camera" src = {CameraImage} />
                                    </div>
                                    <p className = "ParagrapheDesignateur">change photo</p>
                                </div>
                                <div className = "NameInput inputZone">
                                    <label for = "name">Name</label>
                                    <br/><input id = "name" type = "text" placeholder = "Enter your name..." />
                                </div>
                                <div className = "BioInput inputZone">
                                    <label for = "BIO">Bio</label>
                                    <br/><textarea readonly maxlength = "250" id = "BIO" type = "text" placeholder = "Enter your bio..." />
                                </div>
                                <div className = "PhoneInput inputZone">
                                    <label for = "phone">Phone</label>
                                    <br/><input id = "phone" type = "phone" placeholder = "Enter your phone..." />
                                </div>
                                <div className = "EmailInput inputZone">
                                    <label for = "email">Email</label>
                                    <br/><input id = "email" type = "email" placeholder = "Enter your email..." />
                                </div>
                                <div className = "PasswordInput inputZone">
                                    <label for = "password">Password</label>
                                    <br/><input id = "password" type = "password" placeholder = "Enter your password..." />
                                </div>

                                <input className = "SaveButton" type = "submit" value = "Save" ></input>
                            </form>
                        </div>
                    </div>
                </section>
                <ProfilePopup/>
            </>
        )
    }
}

export default EditHomePage;