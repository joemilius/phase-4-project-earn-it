import React, { useState } from "react"

function SignUp({ userSubmit, setUser }){
    const [userData, setUserData] = useState({
        username: "",
        password: "",
        first_name: "",
        is_parent: false,
        email: "",
        last_name: ""
    })

    function handleCreateUser(event) {
        setUserData({...userData, 
          [event.target.name] : event.target.value})
      }

    function userSubmit(event) {
    event.preventDefault()
    fetch("/signup", {
        method: "POST",
        headers: {
        "Content-Type": "Application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(resp => resp.json())
    .then(data => setUser(data))
    }
      
    return (
        <div>
            <form onSubmit={userSubmit}>
                <h2>Create New User</h2>
                <input name='username' placeholder='Username' value={userData.username} onChange={handleCreateUser}></input>
                <input name='password' placeholder='Password' type='password' value={userData.password} onChange={handleCreateUser}></input>
                <input name='first_name' placeholder='First Name' value={userData.first_name} onChange={handleCreateUser}></input>
                <input name='last_name' placeholder='Last Name' value={userData.last_name} onChange={handleCreateUser}></input>
                <input name='is_parent' placeholder='isParent' value={userData.is_parent} onChange={handleCreateUser}></input>
                <input name='email' placeholder='Email' value={userData.email} onChange={handleCreateUser}></input>
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp