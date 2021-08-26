import React, {useState, useEffect} from 'react'
import Parent from './Parent'
import Child from './Child'
import { HomeSubtitle, Wrapper, ParentChildDiv, ParentDiv, ChildDiv } from './StyledComponentElements'


function ParentView({user, updateChore, toggleUpdateChore, household, showMoney, setShowMoney, myChores, setMyChores, handleLogOut}){    
    return (
        <Wrapper>
            <ParentChildDiv>
                <ParentDiv>
                    <HomeSubtitle>Household Parents</HomeSubtitle>
                    {user.household.users.map(eachUser => {
                        if (eachUser.is_parent === true) {
                            return (
                                <Parent 
                                    key = {eachUser.id}
                                    id = {user.id}
                                    user={eachUser}
                                    household = {household}
                                    updateChore={updateChore} 
                                    toggleUpdateChore={toggleUpdateChore}
                                    handleLogOut={handleLogOut}
                                />
                            )
                        }})}
                </ParentDiv>
                <ChildDiv>
                    <HomeSubtitle>Household Children</HomeSubtitle>
                        {user.household.users.map(user => {
                            if (user.is_parent === false) {
                                return (
                                    <Child 
                                        key={user.id} 
                                        user={user} 
                                        updateChore={updateChore} 
                                        toggleUpdateChore={toggleUpdateChore}
                                        household = {household}
                                        showMoney={showMoney} 
                                        setShowMoney={setShowMoney}
                                        myChores={myChores} 
                                        setMyChores={setMyChores}
                                    />
                                )
                        }})}
                </ChildDiv>
            </ParentChildDiv>
        </Wrapper>
    )
}

export default ParentView
