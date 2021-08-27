import React, {useState, useEffect} from 'react'
import ChildChore from './ChildChore'
import {Wrapper, HomeSubtitle, LoginButton} from '../StyledComponentElements'
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

<<<<<<< HEAD:client/src/Components/ChildView.js
function ChildView({ user, showMoney, setShowMoney, myChores, setMyChores}){
    
    const [allChildChores, setAllChildChores] = useState([])
=======
function ChildView({user}){
    const [showMoney, setShowMoney] = useState(false)
    const [myChores, setMyChores] = useState([])
>>>>>>> selfDelete:client/src/Components/ChildView/ChildView.js
    const [earnedMoney, setEarnedMoney] = useState('')
    
    

    useEffect(() => {
        fetch(`/child_chores/${user.id}`)
        .then(response => response.json())
        .then(data => setMyChores(data))
    }, [user.id])

        function getMyMoney(){
            setShowMoney(!showMoney)
        fetch(`/me`)
          .then(response => response.json())
          .then(data => setEarnedMoney(data.total_earnings))
        }
   
    
    return (
        <Wrapper>
            <LoginButton onClick={getMyMoney}>Money Earned</LoginButton>
            {showMoney &&
            <MoneyEarned>Money Earned: ${earnedMoney}</MoneyEarned>
            }
            <HomeSubtitle>Assigned Chores</HomeSubtitle>
            <ChildChoresDiv>

            {myChores && myChores.map(child_chore => {
                return(
                    <ChildChore
                        child_chore = {child_chore}
                        myChores = {myChores}
                        setMyChores = {setMyChores}
                        setShowMoney= {setShowMoney}
<<<<<<< HEAD:client/src/Components/ChildView.js
                        allChildChores={allChildChores} 
                        setAllChildChores={setAllChildChores}
                        user = {user}
=======
>>>>>>> selfDelete:client/src/Components/ChildView/ChildView.js
                    />
                )
            })}
            </ChildChoresDiv>
        </Wrapper>
    )
}

export default ChildView
