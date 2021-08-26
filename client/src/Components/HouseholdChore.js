import React from 'react'
import styled from 'styled-components'
import {ChoreName, ChoreDesc, HouseholdChoreDiv} from './StyledComponentElements'

const ChoreDelButton = styled.button`
    text-align: center;
    border-radius: 20px;
    padding: .5em;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
        cursor: pointer;
    }
`

const HouseholdChore = ({chore, handleDelete, id}) => {    
    return (
        <HouseholdChoreDiv>
            <ChoreName>{chore.chore_name}</ChoreName>
            <ChoreDesc>{chore.description}</ChoreDesc>
            <ChoreDelButton id={id} onClick={handleDelete}>Delete Chore from Household</ChoreDelButton>
        </HouseholdChoreDiv>
    )
}

export default HouseholdChore
