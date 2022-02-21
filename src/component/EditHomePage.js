import { Component, useEffect } from 'react';
import devChallengeLogo from '../elements/devchallenges.svg';
import Arrow from '../elements/DownArrow.svg';
import UserImage from '../elements/UserImage.jfif';
import ProfilePopup from '../component/ProfilePopup';
import {Link} from 'react-router-dom';
import LeftArrowLogo from '../elements/LeftArrowLogo.svg';
import CameraImage from '../elements/camera.svg';
import jwt from 'jwt-decode'

import './style.css';
import axios from 'axios';

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

const onSubmitInForm = (e,userId) => {
    e.preventDefault();

    const data = {
        name: e.target[0].value,
        bio: e.target[1].value,
        phone: e.target[2].value,
        email: e.target[3].value,
        password: e.target[4].value,
        userId: userId
    }

    axios.post("https://authappback.onrender.com/updateuser",data).then(valid=>{
        if(!valid){
            console.error("une erreur est survenue !!")
        }else{
            console.log(valid)
            document.location.href = "/homepage"
        }
    }).catch(err=>{
        console.error(err)
    })
    console.log(data)
}

const EditHomePage = ({allstate,setAllstate}) => {
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
    if(id===null){
       document.location.href = "/login" 
    }

    useEffect(()=>{
        if(allstate.email===""||allstate.email===null||allstate.email===undefined){
            document.location.href = "/homepage"
        }
    },[])
    return(
        <>
            <header>
                <div className = "devchallengeLogo">
                    <img alt = "devchallenges" src = {devChallengeLogo} />
                </div>
                <div className = "UserProfileLink">
                    <div className = "UserMedia">
                        <img className = "UserPhoto" alt = "userPhoto" src = {allstate.UserPhoto}/>
                    </div>
                    <p className = "UserName">{allstate.UserName}</p>
                    <img onClick = {OnClickInArrow} className = "Uparrow reactif" alt = "arrow" src = {allstate.arrowImage} />
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
                        <form onSubmit={e=>onSubmitInForm(e,id)}>
                            <div className = "PhotoChanger">
                                <div className = "PhotoBloc">
                                    <img className = "UserPhoto" alt = "User photo" src = {allstate.UserPhoto} />
                                    <div className = "Darker"></div>
                                    <img className = "cameraPhoto" alt = "camera" src = {CameraImage} />
                                </div>
                                <p className = "ParagrapheDesignateur">change photo</p>
                            </div>
                            <div className = "NameInput inputZone">
                                <label for = "name">Name</label>
                                <br/><input required id = "name" type = "text" placeholder = "Enter your name..." defaultValue={allstate.UserName?allstate.UserName:""} />
                            </div>
                            <div className = "BioInput inputZone">
                                <label for = "BIO">Bio</label>
                                <br/><textarea required readonly maxlength = "250" id = "BIO" type = "text" placeholder = "Enter your bio..."  defaultValue={allstate.bio} />
                            </div>
                            <div className = "PhoneInput inputZone">
                                <label for = "phone">Phone</label>
                                <br/><input required id = "phone" type = "phone" placeholder = "Enter your phone..." defaultValue={allstate.phone} />
                            </div>
                            <div className = "EmailInput inputZone">
                                <label for = "email">Email</label>
                                <br/><input required id = "email" type = "email" placeholder = "Enter your email..." defaultValue={allstate.email} />
                            </div>
                            <div className = "PasswordInput inputZone">
                                <label for = "password">Password</label>
                                <br/><input minLength={6} required id = "password" type = "password" placeholder = "Enter your password..." />
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

export default EditHomePage;