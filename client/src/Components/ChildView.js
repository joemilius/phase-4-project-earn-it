import React, {useState, useEffect} from 'react'
import ChildChore from './ChildChore'
import {Wrapper, HomeSubtitle} from './StyledComponentElements'
import styled from 'styled-components'

const ChildChoresDiv = styled.div`
    display: grid;
    justify-items: center;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fill, 15rem) 20%; 
    grid-gap: 20px; 
`

const MoneyEarned = styled.h2`
    text-align: center;
`

function ChildView({user}){
    const [myChores, setMyChores] = useState([])
    const [totalEarnings, setTotalEarnings] = useState(user.total_earnings)

    useEffect(() => {
        fetch(`/child_chores/${user.id}`)
        .then(response => response.json())
        .then(data => setMyChores(data))
    }, [])

    return (
        <Wrapper>
            <MoneyEarned>Money Earned: ${totalEarnings}</MoneyEarned>
            <HomeSubtitle>Assigned Chores</HomeSubtitle>
            <ChildChoresDiv>
            {myChores && myChores.map(child_chore => {
                return(
                    <ChildChore
                        child_chore = {child_chore}
                        myChores = {myChores}
                        setMyChores = {setMyChores}
                        totalEarnings = {totalEarnings}
                        setTotalEarnings = {setTotalEarnings}
                        user = {user}
                    />
                )
            })}
            </ChildChoresDiv>
        </Wrapper>
    )
}

export default ChildView
