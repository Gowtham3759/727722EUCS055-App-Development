import {useState} from 'react';
import Signin from './signin';
import Signup from './signup';
import './App.css';
const App=()=>
{
    const[isregister,setIsregister]=useState(true);
    return(
      <div className="all">
        <div>
          {!isregister ? <Signup/>:<Signin/>}
        </div>
        {!isregister?'if already registered? ':'create a new account'}
        <br></br>
        <br></br>
        <button onClick={()=>setIsregister(!isregister)} className="button">
          {!isregister?'Switch to Signin':'Switch to Signup'}
        </button>
      </div>
    );
}
export default App;
