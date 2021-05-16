import { Component } from 'react';
import devChallengeLogo from '../elements/devchallenges.svg';
import Arrow from '../elements/DownArrow.svg';
import UserImage from '../elements/UserImage.jfif';
import ProfilePopup from '../component/ProfilePopup';
import {Link} from 'react-router-dom';

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

class HomePage extends Component{
    state = {
        UserName: "",
        UserPhoto: UserImage,
        arrowImage: Arrow,
        bio : "",
        phone: "",
        email: "",
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
                            <img alt = "userPhoto" src = {this.state.UserPhoto}/>
                        </div>
                        <p className = "UserName">{this.state.UserName}</p>
                        <img onClick = {OnClickInArrow} className = "Uparrow reactif" alt = "arrow" src = {this.state.arrowImage} />
                    </div>
                </header>
                <section className = "ProfileSection">
                    <div className = "Introduction">
                        <h1>Personal info</h1>
                        <p>Basic info, like your name and photo</p>
                    </div>
                    <div className = "UserInformations">
                        <div className = "Head bloc toBorder">
                            <div className = "container">
                                <div className = "leftPart">
                                    <h3>Profile</h3>
                                    <p>Some info maye be visible to other people</p>
                                </div>
                                <div className = "rightPart">
                                    <Link to = "/HomePage/EditHomePage" className = "EditButton btn reactif">Edit</Link>
                                </div>
                            </div>
                        </div>
                        <div className = "FirstBloc bloc toBorder">
                            <div className = "container toFlex">
                                <p className = "presentateur">photo</p>
                                <div style = {{ width: '63%',position: 'relative'}} className = "BigUserImage">
                                    <div className = "ImageContainer">
                                        <img alt = "UserImage" src = {this.state.UserPhoto} />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className = "SecondBloc bloc toBorder">
                            <div className = "container toFlex">
                                <p className = "presentateur">name</p>
                                <p style = {{ width: '63%'}}>{this.state.UserName}</p>
                            </div>
                        </div>
                        <div className = "BlocThree bloc toBorder">
                            <div className = "container toFlex">
                                <p className = "presentateur">bio</p>
                                <p style = {{ width: '63%'}} className = "BIO">{this.state.bio}</p>
                            </div>
                        </div>
                        <div className = "BlocFour bloc toBorder">
                            <div className = "container toFlex">
                                <p className = "presentateur">phone</p>
                                <p style = {{ width: '63%'}} className = "PhoneNumber">{this.state.phone}</p>
                            </div>
                        </div>
                        <div className = "BlocFive bloc toBorder">
                            <div className = "container toFlex">
                                <p className = "presentateur">email</p>
                                <p style = {{ width: '63%'}}>{this.state.email}</p>    
                            </div>
                        </div>
                        <div className = "BlocSix bloc">
                            <div className = "container">
                                <p className = "presentateur">password</p>
                                <p style = {{ width: '63%'}}>{this.state.password}</p>        
                            </div>
                        </div>
                    </div>
                </section>
                <ProfilePopup/>
            </>
        )
    }
}

export default HomePage;