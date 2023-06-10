import React, { useEffect } from "react";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase_config";

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

  const register = async () => {
    try {
      const userreg = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(userreg);
    } catch (error) {
      console.log(error.message);
    }
  };


  // const login =async () =>{
  //   try{
  //     const username = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
  //    console.log(username)
  //   }
  //   catch(error){
  //     console.log(error.message)
  //   }
  // }

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div>
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
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
      <button type="submit">Login</button>

      <br></br>
      <h2>user logged in:</h2>
      {User}
      <button onClick={logout} type="submit">
        signout
      </button>
    </div>
  );
}
