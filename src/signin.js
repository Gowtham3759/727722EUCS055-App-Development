import './Signin.css';
const { useState }=require("react")
const Signin=()=>
{
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const setcredentials = (event)=>
    {
        event.preventDefault();
        alert(`Registered with username: ${username} and password: ${password}`);
        setUsername('');
        setPassword('');
    }
    return(
        <div className="all">
            <div className="h">
                <h2>SIGN IN</h2>
            </div>
            <form onSubmit={setcredentials} className="form">
                <div>
                    <label>Username : </label>
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Password : </label>
                    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                </div>
                <button onSubmit={setcredentials}>Submit</button>
            </form>
        </div>
    );
}
export default Signin;