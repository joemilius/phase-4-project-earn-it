import React, {useState, useEffect} from 'react'
import ChildChore from './ChildChore'
import ChildChoreError from './ChildChoreError'
import { ChildInfoWrapper } from './StyledComponentElements'
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
`

const ChildInfoTitle = styled.h5`
    text-align: center;
    padding: .5em;
`

const ChildChoreTitle = styled.h2`
    text-align: center;
    padding: .5em;
`

const Child = ({user, chores, household}) => {

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
                            <ChildChore key={child_chore.id} child_chore={child_chore} allChildChores={allChildChores} setAllChildChores={setAllChildChores}/>
                            )
                        })}
                    <ChildChoreTitle>Assign New Chore</ChildChoreTitle>
                    <form onSubmit={onChoreAssign}>
                        <select name="chore_id" value={childChore.chore_id}onChange={handleChoreChange}>
                            <option value='' defaultValue>Pick Chore</option>
                            {household.chores ? 
                            household.chores.map((chore, index) => {
                                return(
                                    <option key={index} value={chore.id}>{chore.chore_name}</option>
                                    )})
                                    :
                                    <option>Make a chore</option>}
                        </select>
                        <select name="time_to_complete" value={childChore.time_to_complete} onChange={handleChoreChange}>
                            <option value='' defaultValue>How Long?</option>
                            <option value='15'>15 minutes</option>
                            <option value='30'>30 minutes</option>
                            <option value='45'>45 minutes</option>
                            <option value='60'>60 minutes</option>
                        </select>
                        <select name="reward" value={childChore.reward}onChange={handleChoreChange}>
                            <option value='' defaultValue>Reward</option>
                            <option value='1'>$1</option>
                            <option value='5'>$5</option>
                            <option value='10'>$10</option>
                            <option value='15'>$15</option>
                            <option value='20'>$20</option>
                        </select>
                        <button>Assign</button>
                    </form>
                    {childChoreErrors.map((err) => (
                        <ChildChoreError key={err}>{err}</ChildChoreError>
                    ))}
                </ChildDiv>
            }
        </ChildInfoWrapper>
    )
}

export default Child
