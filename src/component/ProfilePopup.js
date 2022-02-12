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
                <div onClick={()=>{
                    const cookies = document.cookie.split(";");
                    for (const cookie of cookies) {
                        const eqPos = cookie.indexOf("=");
                        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
                    }
                    document.location.reload()
                }} className = "SecondPart prflbloc">
                    <img alt = "logout image" src = {LogoutLogo} />
                    <p>Logout</p>
                </div>
            </div>
        </>
    )
}

export default ProfilePopup;