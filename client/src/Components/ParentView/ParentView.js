import React from 'react'
import Parent from './Parent'
import EachChild from './EachChild'
import { HomeSubtitle, Wrapper, ParentChildDiv, ParentDiv, ChildDiv } from '../StyledComponentElements'


function ParentView({user, refresh, setRefresh, household, handleLogOut}){
    
    
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
                                    currentUserId = {user.id}
                                    eachUser = {eachUser}
                                    household = {household}
                                    refresh = {refresh}
                                    setRefresh={setRefresh}
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
                                        refresh={refresh}
                                        setRefresh={setRefresh}
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
