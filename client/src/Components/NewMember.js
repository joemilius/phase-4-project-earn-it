import React, {useState, useEffect} from 'react'
import Error from './Error'
import { Title, Wrapper, Input, Label, LoginButton, Button, Wrapper2, SignUpForm, Subtitle } from './StyledComponentElements'

function NewMember({ refresh, setRefresh, user, errors, setErrors }){
    const [userData, setUserData] = useState({
        username: "",
        password: "",
        first_name: "",
        is_parent: "",
        email: "",
        last_name: "",
        household_id: user.household.id
    })

    function handleCreateUser(event) {
        setUserData({...userData, 
            [event.target.name] : event.target.value})
    }

    function handleRadioButton(event) {
        setUserData({...userData,
            [event.target.name] : Boolean(event.target.value)})
    }

    function handleClearErrors(){
        setErrors([])
    }
    

    function newMemberSubmit(event) {
        setErrors([])
        event.preventDefault()
        fetch("/households", {
            method: "POST",
            headers: {
            "Content-Type": "Application/json"
            },
            body: JSON.stringify(userData)
        })
        .then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    setRefresh(!refresh)
                });
            } else {
                response.json().then((err) => setErrors(err.errors));
            }
        });

    }
    
    


    return (
        <>
        <Wrapper>
            <SignUpForm onSubmit={newMemberSubmit}>
                <Title>Create New User</Title>
                <Label htmlFor='first_name'>First Name:</Label>
                <Input name='first_name' placeholder='First Name' value={userData.first_name} onChange={handleCreateUser}></Input>
                <Label htmlFor='email'>Email:</Label>
                <Input name='email' placeholder='Email' value={userData.email} onChange={handleCreateUser}></Input>
                <Label htmlFor='username'>Username:</Label>
                <Input name='username' placeholder='Username' value={userData.username} onChange={handleCreateUser}></Input>
                <Label htmlFor='password'>Password:</Label>
                <Input name='password' placeholder='Password' type='password' value={userData.password} onChange={handleCreateUser}></Input>
                <Wrapper2>
                    <Subtitle>Is this Account for a Parent or Child?</Subtitle>
                    <Label htmlFor='is_parent'>Parent</Label>
                    <Input type='radio' name='is_parent' value='true' onChange={handleRadioButton}></Input>
                    <Label htmlFor='is_child'>Child</Label>
                    <Input type='radio' name='is_parent' value='' onChange={handleRadioButton}></Input>
                    <LoginButton>Sign Up</LoginButton>
                    {errors.map((err) => {
                        return(
                            <Error key={err}>{err}</Error>
                        )
                    })}
                    <Button onClick={handleClearErrors}>Already Have an Account?</Button>
                </Wrapper2>
            </SignUpForm>
        </Wrapper>
        
        </>
    )
}

export default NewMember
