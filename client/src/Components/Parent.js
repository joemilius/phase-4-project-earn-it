import React from 'react'
import { ParentTitle, DelButton, LoginButton, UserInfoWrapper } from './StyledComponentElements'

const Parent = ({user, chores, setChores, handleLogOut}) => {
    function handleRemove(){
        fetch(`/users/${user.id}`, {
            method: "DELETE"
        })
        handleLogOut()
        const newChores = chores.map(chore => chore)
        setChores(newChores)
    }

    return (
        <UserInfoWrapper>
            <ParentTitle>{user.first_name} - {user.username}</ParentTitle>
            <LoginButton onClick={handleRemove}>Remove Member</LoginButton>
        </UserInfoWrapper>
    )
}

export default Parent
