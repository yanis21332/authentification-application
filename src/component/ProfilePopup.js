import ProfileUser from '../elements/ProfileUser.svg';
import GroupChat from '../elements/GroupChat.svg';
import LogoutLogo from '../elements/logout.svg';


const ProfilePopup = () => {
    return(
        <>
            <div className = "ProfilePopup container InversePopupAnimation none">
                <div className = "FirstPart">
                    <div className = "profileBloc prflbloc selected">
                        <img alt="profile user" src = {ProfileUser}/>
                        <p>My Profile</p>
                    </div>
                    <div className = "GroupChatBloc prflbloc">
                        <img alt = "Group chat" src = {GroupChat} />
                        <p>Group Chat</p>
                    </div>
                </div>
                <div className = "SecondPart prflbloc">
                    <img alt = "logout image" src = {LogoutLogo} />
                    <p>Logout</p>
                </div>
            </div>
        </>
    )
}

export default ProfilePopup;