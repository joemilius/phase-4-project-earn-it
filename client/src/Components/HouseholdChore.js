import React from 'react'
import styled from 'styled-components'
import {ChoreName, ChoreDesc, ChoreDiv} from './StyledComponentElements'

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
        <ChoreDiv>
            <ChoreName>{chore.chore_name}</ChoreName>
            <ChoreDesc>description: {chore.description}</ChoreDesc>
            <ChoreDelButton id={id} onClick={handleDelete}>Delete Chore from Household</ChoreDelButton>
        </ChoreDiv>
    )
}

export default HouseholdChore
