<<<<<<< HEAD:client/src/Components/ChildChore.js
import {ChoreName, ChoreDesc, HouseholdChoreDiv, ChoreDiv } from './StyledComponentElements'
=======
import {ChoreName, ChoreDesc, ChoreDiv } from '../StyledComponentElements'
>>>>>>> selfDelete:client/src/Components/ParentView/EachChildChore.js
import { FaClock, FaMoneyBillAlt, FaRegCircle, FaCheckCircle } from 'react-icons/fa'
import styled from 'styled-components'


const CompletedButton = styled.button`
    background: black;
    color: white;
    width: 150px;
    border-radius: 20px;
    padding: .5em;
    position: relative;
    bottom: 0px;
    
    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
        cursor: pointer;
    }
`

const DelButton = styled.button`
    text-align: center;
    border-radius: 20px;
    padding: .5em;
    background: black;
    color: white;
    position: relative;
    bottom: 0px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
        cursor: pointer;
    }
`

const TopRow = styled.div`
    display: flex; 
    flex-direction: row;
`

const BottomRow = styled.div`
    display: block;
    float: right;
`

export const BottomChoreDesc = styled.p`
    text-align: right;
    padding: .1em;
    display: block;
`

<<<<<<< HEAD:client/src/Components/ChildChore.js
const ChildChore = ({child_chore, myChores, setMyChores, setShowMoney, allChildChores, setAllChildChores, user}) => {
=======
const EachChildChore = ({child_chore, allChildChores, setAllChildChores}) => {
>>>>>>> selfDelete:client/src/Components/ParentView/EachChildChore.js

    function handleComplete(event){
        event.preventDefault()
        fetch(`child_chores/${child_chore.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                is_completed : !child_chore.is_completed
            })
        })
        .then(response => response.json())
        .then(data => {

            const updatedAllChildChores = allChildChores.map((childChore) => {
                if (childChore.id === data.id) {
                    return { ...childChore, is_completed: data.is_completed };
                  } else {
                    return childChore;
                  }
            })
                setAllChildChores(updatedAllChildChores)
            })
    }

    function handleChildChoreDelete(event){
        event.preventDefault()
        fetch(`/child_chores/${child_chore.id}`, {
            method: "DELETE"
        })
        const updatedAllChildChores = allChildChores.filter((childChore) => childChore.id !== child_chore.id);
        setAllChildChores(updatedAllChildChores)
    }

    if (user.is_parent === true) {
        return (
            <ChoreDiv>
                <TopRow>
                    <ChoreName>{child_chore.chore.chore_name}</ChoreName>
                    <ChoreDesc>{child_chore.chore.description}</ChoreDesc>
                </TopRow>
                <BottomRow>
                    <BottomChoreDesc><FaClock/> {child_chore.time_to_complete} minutes</BottomChoreDesc>
                    <BottomChoreDesc><FaMoneyBillAlt/> ${child_chore.reward}</BottomChoreDesc>
                    {child_chore.is_completed ? <CompletedButton onClick={handleComplete}>Completed <FaCheckCircle/></CompletedButton> : <CompletedButton onClick={handleComplete}>Completed? <FaRegCircle/></CompletedButton>}
                    <DelButton onClick={handleChildChoreDelete}>Unassign Chore from Child</DelButton>
                </BottomRow>
            </ChoreDiv>
        )
    } else {
        return (
            <HouseholdChoreDiv>
                <ChoreName>{child_chore.chore.chore_name}</ChoreName>
                <ChoreDesc>{child_chore.chore.description}</ChoreDesc>
                <ChoreDesc><FaClock/> {child_chore.time_to_complete} minutes</ChoreDesc>
                <ChoreDesc><FaMoneyBillAlt/> ${child_chore.reward}</ChoreDesc>
                {child_chore.is_completed ? <CompletedButton onClick={handleComplete}>Completed <FaCheckCircle/></CompletedButton> : <CompletedButton onClick={handleComplete}>Completed? <FaRegCircle/></CompletedButton>}
                <DelButton onClick={handleChildChoreDelete}>Unassign Chore from Child</DelButton>
            </HouseholdChoreDiv>
        )
    }
}

export default EachChildChore