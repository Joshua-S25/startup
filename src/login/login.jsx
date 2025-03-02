import React from "react";
import { Profile } from "./profile";

export function Login(props) {
    const [imageUrl, setImageUrl] = React.useState(`data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=`);
    const [userName, setUserName] = React.useState(props.userName);
    const [userEmail, setUserEmail] = React.useState(props.userEmail);
    const [password, setPassword] = React.useState('');

    const user = new Profile()

    // Create Profiles to effectively use data throughout
    // Varificiation in the future?
    async function loginUser() {
        user.create(userName, userEmail, password);

        props.onLogin(userName);
        props.onLogin(userEmail);
        props.onLogin(password);
    }

    async function createUser() {
        user.create(userName, userEmail, password);

        props.onLogin(userName);
        props.onLogin(userEmail);
        props.onLogin(password);
    }

    React.useEffect(() => {
        setImageUrl('https://random.dog/201915e6-89e5-4811-8648-7c433d771af5.jpg');
    }, []);

    // NTS :: Currently an issue with buttons directing to guess.html?
    return (
        <main>
            <h1>Welcome to Fantasy General Conference</h1>
            <div>
                <img className="profile" src={imageUrl} alt="User_Profile_Image" width="10%" height="auto" />
            </div>
            <form id="user_info" method="get" action="guess.html">
            <div className="input_container">
               <span>👨‍💻</span> 
               <input id="user_name" type="user" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="username" />
            </div>
            <div className="input_container">
                <span>📧</span>
                <input id="user_email" type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder="your@email.com" />
            </div>
            <div className="input_container">
                <span>🔒</span>
                <input id="user_pass" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
            </div>
            <br />
            <div>
                <button className="sign" type="submit" onClick={() => loginUser()} disabled={!userName || !password}>Sign In</button>
                <button className="create" type="submit" onClick={() => createUser()} disabled={!userName || !password}>Create</button>
            </div>
            </form>
        </main>
    );
}