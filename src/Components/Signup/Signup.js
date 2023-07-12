import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../../store/Context';
import Logo from '../../olx-logo.png';
import './Signup.css';
import {useHistory} from 'react-router-dom';

export default function Signup() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()

  const submitHandler=(e)=>{
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password).then((result)=>{
      result.user.updateProfile({displayName: username}).then(()=>{
        firebase.firestore().collection('users').add({
          id: result.user.uid,
          username: username,
          mobile: mobile
        }).then(()=>{
          history.push('/login')
        })
      })
    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={submitHandler}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
            onChange={(e)=>setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
            onChange={(e)=>setMobile(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type='submit'>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
