import React from 'react'
import {ChoreName, ChoreDesc, ChildChoreDiv, DelButton} from './StyledComponentElements'

const HouseholdChore = ({chore, refresh, setRefresh}) => {    
    
    function handleDelete() {
        fetch(`/chores/${chore.id}`, {
            method: "DELETE",
        })
        setRefresh(!refresh)
    }
    return (
        <ChildChoreDiv>
            <ChoreName>{chore.chore_name}</ChoreName>
            <ChoreDesc>{chore.description}</ChoreDesc>
            <DelButton onClick={handleDelete}>Delete Chore from Household</DelButton>
        </ChildChoreDiv>
    )
}

export default HouseholdChore
