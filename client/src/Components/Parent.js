import React from 'react'
import { ParentTitle, LoginButton, UserInfoWrapper } from './StyledComponentElements'

const Parent = ({user, updateChore, toggleUpdateChore, handleLogOut, id}) => {
    function handleRemove(){
        if (id === user.id) {
            handleLogOut()
            fetch(`/users/${user.id}`, {
                method: "DELETE"
            })
        } else {
            fetch(`/users/${user.id}`, {
                method: "DELETE"
            })
            toggleUpdateChore(!updateChore)
        }
    }

    return (
        <UserInfoWrapper>
            <ParentTitle>{user.first_name} - {user.username}</ParentTitle>
            <LoginButton onClick={handleRemove}>Remove Member</LoginButton>
        </UserInfoWrapper>
    )
}

export default Parent
