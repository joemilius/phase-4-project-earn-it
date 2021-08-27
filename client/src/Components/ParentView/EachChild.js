import React, {useState, useEffect} from 'react'
import EachChildChore from './EachChildChore'
import ChildChoreError from './EachChildChoreError'
import { UserInfoWrapper, FormWrapper, StyledSelect, StyledButton, DelButton } from '../StyledComponentElements'
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
    }
`

const ChildInfoTitle = styled.h5`
    text-align: center;
    padding: .5em;
`

const ChildChoreTitle = styled.h2`
    text-align: center;
    padding: .5em;
`
const ChildInfo = styled.div`
    background: #256ce1;
    padding: 1em;
    max-width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 15px;

`

<<<<<<< HEAD:client/src/Components/Child.js
const Child = ({user, updateChore, toggleUpdateChore, household, showMoney, setShowMoney, myChores, setMyChores}) => {
=======
const EachChild = ({user, refresh, setRefresh, household }) => {
    
>>>>>>> selfDelete:client/src/Components/ParentView/EachChild.js
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
                    setChildChoreErrors([])
                    setChildChore({
                        reward: "",
                        time_to_complete: "",
                        is_completed: Boolean(false),
                        user_id: user.id,
                        chore_id: ""
                    })
                });
            } else {
                response.json().then((err) => {
                    console.log(err)
                    setChildChoreErrors(err.errors
                        )});
            }
        })
    }


    function handleMember(){
        setShowChildInfo(!showChildInfo)
    }

    function handleRemove(){
        fetch(`/users/${user.id}`, {
            method: "DELETE"
        })
<<<<<<< HEAD:client/src/Components/Child.js
        toggleUpdateChore(!updateChore)
=======
        setRefresh(!refresh)
>>>>>>> selfDelete:client/src/Components/ParentView/EachChild.js
    }


    return (
        <UserInfoWrapper>
            <h3>{user.first_name} <span><ShowInfoButton onClick={handleMember}>{showChildInfo ? <FaMinus/> : <FaPlus/>}</ShowInfoButton></span></h3>
            {showChildInfo && 
                <ChildInfo>
                    <ChildInfoTitle>username: {user.username} | email: {user.email}</ChildInfoTitle>
                    <DelButton onClick={handleRemove}>Remove Member</DelButton>
                    <ChildChoreTitle>Assigned Chores</ChildChoreTitle>
                    {allChildChores && allChildChores.map(child_chore => {
                        return(
                            <EachChildChore 
                                key={child_chore.id} 
                                child_chore={child_chore} 
                                allChildChores={allChildChores} 
                                setAllChildChores={setAllChildChores} 
<<<<<<< HEAD:client/src/Components/Child.js
                                showMoney={showMoney} 
                                setShowMoney={setShowMoney} 
                                myChores={myChores} 
                                setMyChores={setMyChores}
                                user={user}
=======
>>>>>>> selfDelete:client/src/Components/ParentView/EachChild.js
                                />
                            )
                        })}
                    <ChildChoreTitle>Assign New Chore</ChildChoreTitle>
                    <FormWrapper onSubmit={onChoreAssign}>
                        <StyledSelect name="chore_id" value={childChore.chore_id}onChange={handleChoreChange}>
                            <option value='' defaultValue>Pick Chore</option>
                            {household.chores ? 
                            household.chores.map((chore, index) => {
                                return(
                                    <option key={index} value={chore.id}>{chore.chore_name}</option>
                                    )})
                                    :
                                    <option>Make a chore</option>}
                        </StyledSelect>
                        <StyledSelect name="time_to_complete" value={childChore.time_to_complete} onChange={handleChoreChange}>
                            <option value='' defaultValue>How Long?</option>
                            <option value='15'>15 minutes</option>
                            <option value='30'>30 minutes</option>
                            <option value='45'>45 minutes</option>
                            <option value='60'>60 minutes</option>
                        </StyledSelect>
                        <StyledSelect name="reward" value={childChore.reward}onChange={handleChoreChange}>
                            <option value='' defaultValue>Reward</option>
                            <option value='1'>$1</option>
                            <option value='5'>$5</option>
                            <option value='10'>$10</option>
                            <option value='15'>$15</option>
                            <option value='20'>$20</option>
                        </StyledSelect>
                        <StyledButton>Assign</StyledButton>
                    </FormWrapper>
                    {childChoreErrors.map((err) => (
                        <ChildChoreError key={err}>{err}</ChildChoreError>
                    ))}
                </ChildInfo>
            }
        </UserInfoWrapper>
    )
}

export default EachChild