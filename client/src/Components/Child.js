import React, {useState, useEffect} from 'react'
import ChildChore from './ChildChore'
import ChildChoreError from './ChildChoreError'
import { ChildInfoWrapper, FormWrapper, StyledSelect, StyledOption, StyledButton } from './StyledComponentElements'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'

const ShowInfoButton = styled.button`
    font-size: .75em;
    display: inline-flex;
    border-radius: 50%;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
        cursor: pointer;
`

const ChildDiv = styled.div`
    background: #256ce1;
    color: white;
    border-radius: 15px;
    padding: 10px
`

const ChildInfoTitle = styled.h5`
    text-align: center;
    padding: .5em;
`

const ChildChoreTitle = styled.h2`
    text-align: center;
    padding: .5em;
`

const Child = ({user, chores, household, showMoney, setShowMoney, myChores, setMyChores}) => {

    const [showChildInfo, setShowChildInfo] = useState(false)
    const [allChildChores, setAllChildChores] = useState([])
    const [childChoreErrors, setChildChoreErrors] = useState([])
    const [childChore, setChildChore] = useState({
        reward: "",
        time_to_complete: "",
        is_completed: Boolean(false),
        user_id: user.id,
        chore_id: ""
    })

    useEffect(() => {
        fetch(`/child_chores/${user.id}`)
        .then(response => response.json())
        .then(data => {
            setAllChildChores(data)
        })
    }, [])

    function handleChoreChange(event){
        setChildChore({...childChore,
            [event.target.name] : event.target.value
        })
    }

    function onChoreAssign(event){
        event.preventDefault()
        fetch(`/child_chores`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(childChore)
        })
        .then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    setAllChildChores([...allChildChores, data])
                    setChildChore({
                        reward: "",
                        time_to_complete: "",
                        is_completed: Boolean(false),
                        user_id: user.id,
                        chore_id: ""
                    })
                });
            } else {
                response.json().then((err) => setChildChoreErrors(err.errors));
            }
        })
    }


    function handleMember(){
        setShowChildInfo(!showChildInfo)
    }

    console.log(user)

    return (
        <ChildInfoWrapper>
            <h3>{user.first_name} <span><ShowInfoButton onClick={handleMember}>{showChildInfo ? <FaMinus/> : <FaPlus/>}</ShowInfoButton></span></h3>
            {showChildInfo && 
                <ChildDiv>
                    <ChildInfoTitle>username: {user.username} | email: {user.email}</ChildInfoTitle>
                    <ChildChoreTitle>Assigned Chores</ChildChoreTitle>
                    {allChildChores && allChildChores.map(child_chore => {
                        return(
                            <ChildChore 
                                key={child_chore.id} 
                                child_chore={child_chore} 
                                allChildChores={allChildChores} 
                                setAllChildChores={setAllChildChores} 
                                showMoney={showMoney} 
                                setShowMoney={setShowMoney} 
                                myChores={myChores} 
                                setMyChores={setMyChores}/>
                            )
                        })}
                    <ChildChoreTitle>Assign New Chore</ChildChoreTitle>
                    <FormWrapper onSubmit={onChoreAssign}>
                        <StyledSelect name="chore_id" value={childChore.chore_id}onChange={handleChoreChange}>
                            <StyledOption value='' defaultValue>Pick Chore</StyledOption>
                            {household.chores ? 
                            household.chores.map((chore, index) => {
                                return(
                                    <StyledOption key={index} value={chore.id}>{chore.chore_name}</StyledOption>
                                    )})
                                    :
                                    <option>Make a chore</option>}
                        </StyledSelect>
                        <StyledSelect name="time_to_complete" value={childChore.time_to_complete} onChange={handleChoreChange}>
                            <StyledOption value='' defaultValue>How Long?</StyledOption>
                            <StyledOption value='15'>15 minutes</StyledOption>
                            <StyledOption value='30'>30 minutes</StyledOption>
                            <StyledOption value='45'>45 minutes</StyledOption>
                            <StyledOption value='60'>60 minutes</StyledOption>
                        </StyledSelect>
                        <StyledSelect name="reward" value={childChore.reward}onChange={handleChoreChange}>
                            <StyledOption value='' defaultValue>Reward</StyledOption>
                            <StyledOption value='1'>$1</StyledOption>
                            <StyledOption value='5'>$5</StyledOption>
                            <StyledOption value='10'>$10</StyledOption>
                            <StyledOption value='15'>$15</StyledOption>
                            <StyledOption value='20'>$20</StyledOption>
                        </StyledSelect>
                        <StyledButton>Assign</StyledButton>
                    </FormWrapper>
                    {childChoreErrors.map((err) => (
                        <ChildChoreError key={err}>{err}</ChildChoreError>
                    ))}
                </ChildDiv>
            }
        </ChildInfoWrapper>
    )
}

export default Child
