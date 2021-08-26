import React, {useState} from 'react'
import ParentView from './ParentView'
import ChildView from './ChildView'
import { Title, HomeSubtitle, Wrapper } from './StyledComponentElements'

function Home({user, updateChore, toggleUpdateChore, household, handleLogOut}){
    const [showMoney, setShowMoney] = useState(false)
    const [myChores, setMyChores] = useState([])
    
    return (
        <Wrapper>
            <Title>Hi {user.first_name}</Title>
            <HomeSubtitle>You are a {user.is_parent ? "Parent" : "Child"} in the {household.last_name} household!</HomeSubtitle>
            {user.is_parent 
            ? <ParentView 
                user={user} 
                updateChore={updateChore} 
                toggleUpdateChore={toggleUpdateChore}
                household={household} 
                showMoney={showMoney} 
                setShowMoney={setShowMoney} 
                myChores={myChores} 
                setMyChores={setMyChores}
                handleLogOut={handleLogOut}
                />
            : <ChildView 
                user={user}
                updateChore={updateChore} 
                toggleUpdateChore={toggleUpdateChore} 
                showMoney={showMoney} 
                setShowMoney={setShowMoney} 
                myChores={myChores} 
                setMyChores={setMyChores}/>
            }
        </Wrapper>
    )
}

export default Home
