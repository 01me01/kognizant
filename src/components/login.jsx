import React, { useEffect } from "react";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase_config";
import "./login.css" 

export default function Login() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [User, setUser] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if(currentUser){
        setUser(currentUser);
      }
      else{
        setUser("No User Signed In");
      }
    });
  }, []);


  const register =async () => {
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }


  const login =async () =>{
    try{
      const username = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
     console.log(username)
    }
    catch(error){
      console.log(error.message)
    }
  }

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div className="maincard">
      <div className="elements">
      <h2>create user</h2>
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setRegisterEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setRegisterPassword(e.target.value)}
      />
      <button onClick={register} type="submit">
        signin
      </button>

      <h2>Login</h2>
      <input type="email" placeholder="email" onChange={(e) => setLoginEmail(e.target.value)}/>
      <input type="password" placeholder="password" onChange={(e) => setLoginPassword(e.target.value)} />
      <button onClick={login} type="submit">Login</button>

      <br></br>
      <h2>user logged in:</h2>
      {User?.email}
      <button onClick={logout} type="submit">
        signout
      </button>
      </div>
    </div>
  );
}