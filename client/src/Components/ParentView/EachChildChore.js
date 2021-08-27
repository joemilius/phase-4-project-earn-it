import {ChoreName, ChoreDesc, ChoreDiv } from '../StyledComponentElements'
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
    float: right;

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
    float: right;

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
const TopChoreDesc = styled.div`
white-space: pre-line;
width: 100%;
padding: .5em;
margin: .25em;
margin-left: .7em;
display: grid;
grid-template-columns: repeat(2, auto); 
background: #256ce1;
color: #f2f2f2;
`

export const BottomChoreDesc = styled.p`
    text-align: right;
    padding: .1em;
    display: block;
`

const EachChildChore = ({child_chore, allChildChores, setAllChildChores, user}) => {

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


        return (
            <ChoreDiv>
                <TopRow>
                    <ChoreName>{child_chore.chore.chore_name}</ChoreName>
                    <TopChoreDesc>{child_chore.chore.description}</TopChoreDesc>
                </TopRow>
                <BottomRow>
                    <BottomChoreDesc><FaClock/> {child_chore.time_to_complete} minutes</BottomChoreDesc>
                    <BottomChoreDesc><FaMoneyBillAlt/> ${child_chore.reward}</BottomChoreDesc>
                    {child_chore.is_completed ? <CompletedButton onClick={handleComplete}>Completed <FaCheckCircle/></CompletedButton> : <CompletedButton onClick={handleComplete}>Completed? <FaRegCircle/></CompletedButton>}
                    <DelButton onClick={handleChildChoreDelete}>Unassign Chore from Child</DelButton>
                </BottomRow>
            </ChoreDiv>
        )
}

export default EachChildChore