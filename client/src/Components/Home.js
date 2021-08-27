import React from 'react'
import ParentView from './ParentView/ParentView'
import ChildView from './ChildView/ChildView'
import { Title, HomeSubtitle, Wrapper } from './StyledComponentElements'

function Home({user, refresh, setRefresh, household, handleLogOut}){
    
    return (
        <Wrapper>
            <Title>Hi {user.first_name}</Title>
            <HomeSubtitle>You are a {user.is_parent ? "Parent" : "Child"} in the {household.last_name} household!</HomeSubtitle>
            {user.is_parent 
            ? <ParentView 
                user={user} 
                refresh={refresh}
                setRefresh={setRefresh} 
                household={household}  
                handleLogOut={handleLogOut}
                />
            : <ChildView 
                user={user}
                refresh={refresh}
                setRefresh={setRefresh}
                />
            }
        </Wrapper>
    )
}

export default Home
