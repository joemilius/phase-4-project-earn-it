import {ChoreName, ChoreDesc, ChoreDiv } from './StyledComponentElements'
import { FaClock, FaMoneyBillAlt } from 'react-icons/fa'
import styled from 'styled-components'

const DelButton = styled.button`
    text-align: center;
    border-radius: 20px;
    padding: .5em;
    background: black;
    color: white;
`


const ChildChore = ({child_chore, myChores, setMyChores, setShowMoney}) => {

    function handleComplete(event){
        event.preventDefault()
        setShowMoney(false)
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
            const updatedChildChores = myChores.map((childChore) => {
                if (childChore.id === data.id) {
                  return { ...childChore, is_completed: data.is_completed };
                } else {
                  return childChore;
                }})
                setMyChores(updatedChildChores)
            })
    }

    function handleChildChoreDelete(event){
        event.preventDefault()
        fetch(`/child_chores/${child_chore.id}`, {
            method: "DELETE"
        })
        const updatedChildChores = myChores.filter((childChore) => childChore.id !== child_chore.id);
        setMyChores(updatedChildChores)
    }

    return (
        <ChoreDiv>
            <ChoreName>{child_chore.chore.chore_name}</ChoreName>
            <ChoreDesc>{child_chore.chore.description}</ChoreDesc><br/>
            <ChoreDesc><FaClock/> {child_chore.time_to_complete} minutes</ChoreDesc>
            <ChoreDesc><FaMoneyBillAlt/> ${child_chore.reward}</ChoreDesc>
            {child_chore.is_completed ? <ChoreDesc>Completed <span onClick={handleComplete}>✅</span></ChoreDesc> : <ChoreDesc>Completed <span onClick={handleComplete}>✖️</span></ChoreDesc>}
            <DelButton onClick={handleChildChoreDelete}>Unassign Chore from Child</DelButton>
        </ChoreDiv>
    )
}

export default ChildChore

