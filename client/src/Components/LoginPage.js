import React, {useState} from 'react'
import Error from './Error'
import SignUp from './SignUp'
import Login from './Login'

function LoginPage({ setUser, setErrors, errors, setIsParent, loginSubmit, handleLogin, loginData }){
    const [showLogin, setShowLogin] = useState(true)
    

    function handleShowLoginClearErrors() {
        setShowLogin(!showLogin)
        setErrors([])
    }
    
    return (
        <div>
            { showLogin 
            ? 
            <Login 
                handleShowLoginClearErrors = {handleShowLoginClearErrors}
                setIsParent={setIsParent}
                loginSubmit={loginSubmit}
                handleLogin={handleLogin}
                loginData={loginData}
                setUser={setUser}
                setErrors={setErrors}
            />
            :
            <SignUp
                setUser = {setUser}
                handleShowLoginClearErrors = {handleShowLoginClearErrors}
                setErrors = {setErrors}
            />
            }
            {errors.map((err) => (
                <Error key={err}>{err}</Error>
            ))}
        </div>
    )
}

export default LoginPage
