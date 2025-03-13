import React from "react";
import { Profile } from "./profile";
import { NavLink, useNavigate } from "react-router-dom";

export function Login() {
    const [imageUrl, setImageUrl] = React.useState(`data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=`);
    const [userName, setUserName] = React.useState('');
    const [userEmail, setUserEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [users, setUsers] = React.useState(() => { return JSON.parse(localStorage.getItem('users')) || [] })
    

    const user = new Profile()
    localStorage.setItem('users', JSON.stringify(users));

    const [loggedIn, setLoggedIn] = React.useState(false);
        // let temp = JSON.parse(localStorage.getItem(userName + ' Profile')) || [];
        // return temp.auth || user.auth;});

    // const navigate = useNavigate();

    //Funciton for updating the users library
    // const addUser = (userFile) => {
    //     setUsers(prevUsers => [...prevUsers, userFile]);
    // };

    // Create Profiles to effectively use data throughout
    async function loginUser() {
        userLoginOrCreate(`/api/auth/login`);
        console.log("You've made it back");
        // user.login(userName, userEmail, password, users);

        // if(user.auth == true)
        // {
        //     // setUserName(userName);
        //     // setUserEmail(userEmail);
        //     // setPassword(password);

        //     setLoggedIn(user.auth);

        //     // navigate("guess");
        // }
        console.log("Did you make it here?");
    }

    async function createUser() {
        userLoginOrCreate(`/api/auth/create`);
        console.log("You've returned");
        // let userFile = user.create(userName, userEmail, password, users);

        // if(user.auth == true)
        // {       
        //     // addUser(userFile);
        //     // localStorage.setItem('users', JSON.stringify(users));

        //     setLoggedIn(user.auth);

        //     // navigate("guess");
        // }
        // else
        // {
        //     user.reset();
        // }
        console.log("Did you make it here?");
    }

    async function logoutUser() {
        fetch(`/api/auth/logout`, {
            method: 'delete',
        })
            .catch(() => {
                console.error("Couldn't log you out. Sorry!");
            })
            .finally(() => {
                localStorage.removeItem("Username");
                setLoggedIn(false);
            })
    }

    async function userLoginOrCreate(endpoint) {
        console.log("Entering the feilds and awaiting response...");
        const response = await fetch(endpoint, {
            method: 'post',
            body: JSON.stringify({ name: userName, email: userEmail, password: password}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        });
        if (response?.status === 200) {
            localStorage.setItem('Username', userName);
            console.log("YOU ARE AUTHENTICATED");
            setLoggedIn(true);
        }
        else
        {
            console.log("SORRY: NOT AUTH");
            setLoggedIn(false);
        }
    }

    React.useEffect(() => {
        fetch(`https://random.dog/woof.json`)
            .then((response) => response.json())
            .then((data) => {
                if(data.url.endsWith(".mp4"))
                {
                    console.log("Ha! A video! Skipping -> :", data.url);
                    setImageUrl("https://random.dog/ed6c2ace-d58e-41d5-bc89-96846b110f92.jpg");
                }
                else
                {
                    console.log(data.url);
                    setImageUrl(data.url);
                }
            })
            .catch((error) => console.error("Error fetching dog image:", error));
    }, []);

    return (
        <main>
            <h1>Welcome to Fantasy General Conference</h1>
            <div>
                <img className="profile" src={imageUrl} alt="User_Profile_Image" width="10%" height="auto" />
            </div>
            {loggedIn == false ? (
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
                        <button className="sign" type="button" onClick={() => loginUser()} disabled={!userName || !password}>Sign In</button>
                        <button className="create" type="button" onClick={() => createUser()} disabled={!userName || !password}>Create</button>
                    </div>
            </form>
                ) : (
                    <div>
                        <h1>{userName}</h1>
                        <NavLink to='guess'><button className="play" type="button" disabled={loggedIn != true}>Play</button></NavLink>
                        <button className="logout" type="button" onClick={() => logoutUser()}>Logout</button>
                    </div>
                )}
        </main>
    );
}