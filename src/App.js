import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [loginDetails, setLoginDetails] = useState({userName:'',password:''});
  const [incorrectDetails, setIncorrectDetails]= useState(false)
  const userData = { userName: 'user', password: 'password'}

  const handleChange=(event)=>{
    const {name, value} = event.target;

    setLoginDetails((prev)=>
    ({...prev, [name]:value})
    )

  }
  

  const handleSubmit=(event)=>{

    if(loginDetails.userName && loginDetails.password){
      event.preventDefault()
    if(loginDetails.userName === userData.userName && loginDetails.password === userData.password){
      setIsLoggedIn(true)
      setIncorrectDetails(false)
    }else{
      setIsLoggedIn(false);
      setIncorrectDetails(true)
    }
  }

  }

  console.log(loginDetails)


  return (
    <div className="App">
      <h1>Login Page</h1>
      {loggedIn?<p>Welcome, user!</p>:''}
      {incorrectDetails?<p style={{color:'red'}}>Invalid username or password</p>:''}
      {loggedIn?'':
      <form>
      <label htmlFor='userName'>Username:</label>
      <input type='text' id='userName' required value={loginDetails.userName} onChange={handleChange} name='userName'/><br/>
      <label htmlFor='password'>Password:</label>
      <input type='password' id='password' required value={loginDetails.password} onChange={handleChange} name='password'/><br/>
      <button type='submit' onClick={handleSubmit}>Submit</button>
    </form>
    }
      

    </div>
  );
}

export default App;
