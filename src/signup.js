import './Signup.css';
const { useState }=require("react")
const Signup=()=>
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
            <h2>SIGN UP</h2>
            <form onSubmit={setcredentials} className="form">
                <div>
                    <label>Username : </label>
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Password : </label>
                    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                </div>
                <div>
                    <label>Email : </label>
                    <input type="text" value={username} />
                </div>
                <div>
                    <label>Phone no : </label>
                    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                </div>
                <button onSubmit={setcredentials} className="submit">Submit</button>
            </form>
        </div>
    );
}
export default Signup;