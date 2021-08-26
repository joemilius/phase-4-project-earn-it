import React from 'react'
import { ParentTitle, DelButton, UserInfowrapper, UserInfoWrapper } from './StyledComponentElements'

const Parent = ({user, chores, setChores}) => {

    function handleRemove(){
        fetch(`/users/${user.id}`, {
            method: "DELETE"
        })
        const newChores = chores.map(chore => chore)
        setChores(newChores)
    }

    return (
        <UserInfoWrapper>
            <ParentTitle>{user.first_name} - {user.username}</ParentTitle>
            <DelButton onClick={handleRemove}>Remove Member</DelButton>
        </UserInfoWrapper>
    )
}

export default Parent
