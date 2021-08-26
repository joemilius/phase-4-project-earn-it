import {ChoreName, ChoreDesc, ChoreDiv, DelButton } from './StyledComponentElements'
import { FaClock, FaMoneyBillAlt, FaRegCircle, FaCheckCircle } from 'react-icons/fa'
import styled from 'styled-components'

// const DelButton = styled.button`
//     text-align: center;
//     border-radius: 20px;
//     padding: .5em;
//     &:hover{
//         transition: all 0.2s ease-in-out;
//         background: black;
//         color: #f2f2f2;
//     }
// `
const CompletedButton = styled.button`
        width: 150px;
        border-radius: 20px;
        padding: .5em;
        &:hover{
        transition: all 0.2s ease-in-out;
        background: black;
        color: #f2f2f2;
    }
`

const ChildChore = ({child_chore, myChores, setMyChores, setShowMoney, allChildChores, setAllChildChores}) => {

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
                }
            })

            const updatedAllChildChores = allChildChores.map((childChore) => {
                if (childChore.id === data.id) {
                    return { ...childChore, is_completed: data.is_completed };
                  } else {
                    return childChore;
                  }
            })
                setMyChores(updatedChildChores)
                setAllChildChores(updatedAllChildChores)
            })
    }

    function handleChildChoreDelete(event){
        event.preventDefault()
        fetch(`/child_chores/${child_chore.id}`, {
            method: "DELETE"
        })
        const updatedChildChores = myChores.filter((childChore) => childChore.id !== child_chore.id);
        const updatedAllChildChores = allChildChores.filter((childChore) => childChore.id !== child_chore.id);
        setMyChores(updatedChildChores)
        setAllChildChores(updatedAllChildChores)
    }

    return (
        <ChoreDiv>
            <ChoreName>{child_chore.chore.chore_name}</ChoreName>
            <ChoreDesc>{child_chore.chore.description}</ChoreDesc><br/>
            <ChoreDesc><FaClock/> {child_chore.time_to_complete} minutes</ChoreDesc>
            <ChoreDesc><FaMoneyBillAlt/> ${child_chore.reward}</ChoreDesc>
            {child_chore.is_completed ? <CompletedButton onClick={handleComplete}>Completed <FaCheckCircle/></CompletedButton> : <CompletedButton onClick={handleComplete}>Completed? <FaRegCircle/></CompletedButton>}
            <DelButton onClick={handleChildChoreDelete}>Unassign Chore from Child</DelButton>
        </ChoreDiv>
    )
}

export default ChildChore

