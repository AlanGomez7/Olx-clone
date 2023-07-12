import React,{useContext, useState} from 'react';
import { FirebaseContext } from '../../store/Context';
import Logo from '../../olx-logo.png';
import './Login.css';
import {useHistory} from 'react-router-dom';


function Login() {
  const loginHandler = (e)=>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(username, password).then(()=>{
      history.push('/')
    }).catch(err=>{
      setErr(true)
    })
  }
  const [err, setErr] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {firebase} = useContext(FirebaseContext);
  const history = useHistory()
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={loginHandler}>
          {
            err ? <p style={{color:'red'}}>Invalid Username or Password!</p>
            : <p></p>
          }
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            onChange={(e)=>setUsername(e.target.value)}
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
          <button type='submit'>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
