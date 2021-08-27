import React from 'react'
import { ParentTitle, LoginButton, UserInfoWrapper } from '../StyledComponentElements'

const Parent = ({eachUser, refresh, setRefresh, handleLogOut, currentUserId}) => {
    function handleRemove(){
        if (currentUserId === eachUser.id){
            handleLogOut()

            fetch(`/users/${eachUser.id}`, {
            method: "DELETE"
            })
        }else {
            fetch(`/users/${eachUser.id}`, {
                method: "DELETE"
                })
            setRefresh(!refresh)
        }
    }

    return (
        <UserInfoWrapper>
            <ParentTitle>{eachUser.first_name} - {eachUser.username}</ParentTitle>
            <LoginButton onClick={handleRemove}>Remove Member</LoginButton>
        </UserInfoWrapper>
    )
}

export default Parent
