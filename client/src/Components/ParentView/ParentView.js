import React from 'react'
import Parent from './Parent'
import EachChild from './EachChild'
import { HomeSubtitle, Wrapper, ParentChildDiv, ParentDiv, ChildDiv } from '../StyledComponentElements'


<<<<<<< HEAD:client/src/Components/ParentView.js
function ParentView({user, updateChore, toggleUpdateChore, household, showMoney, setShowMoney, myChores, setMyChores, handleLogOut}){    
=======
function ParentView({user, refresh, setRefresh, household, handleLogOut}){
    
    
>>>>>>> selfDelete:client/src/Components/ParentView/ParentView.js
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
<<<<<<< HEAD:client/src/Components/ParentView.js
                                    id = {user.id}
                                    user={eachUser}
                                    household = {household}
                                    updateChore={updateChore} 
                                    toggleUpdateChore={toggleUpdateChore}
=======
                                    currentUserId = {user.id}
                                    eachUser = {eachUser}
                                    household = {household}
                                    refresh = {refresh}
                                    setRefresh={setRefresh}
>>>>>>> selfDelete:client/src/Components/ParentView/ParentView.js
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
                                    <EachChild 
                                        key={user.id} 
                                        user={user} 
<<<<<<< HEAD:client/src/Components/ParentView.js
                                        updateChore={updateChore} 
                                        toggleUpdateChore={toggleUpdateChore}
=======
                                        refresh={refresh}
                                        setRefresh={setRefresh}
>>>>>>> selfDelete:client/src/Components/ParentView/ParentView.js
                                        household = {household}
                                    />
                                )
                        }})}
                </ChildDiv>
            </ParentChildDiv>
        </Wrapper>
    )
}

export default ParentView
