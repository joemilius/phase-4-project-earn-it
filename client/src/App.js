import React, {useState, useEffect} from 'react'
import LoginPage from './Components/LoginPage';
import Home from './Components/Home' 
import Navbar from './Components/Navbar/Navbar';
import ChoreForm from './Components/ChoreForm';
import NewMember from './Components/NewMember'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  const [errors, setErrors] = useState([])
  const [user, setUser] = useState(null)
  const [refresh, setRefresh] = useState(false)
  const [isParent, setIsParent] = useState('')
  const [household, setHousehold] = useState([])

  
  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setUser(user)
          setIsParent(user.is_parent)
          setHousehold(user.household)
        });
      }
    })
  }, [refresh]);

  function handleLogOut() {
    fetch("/logout", { method: "DELETE"}).then((resp) => {
      if (resp.ok) {
        setUser(null);
      }
    })
  }

  return (
    <Router>
      <Navbar user={user} isParent={isParent} handleLogOut={handleLogOut} />
      { !user
      ? 
      <LoginPage 
      setUser = {setUser} 
      setIsParent={setIsParent} 
      setErrors={setErrors} 
      errors = {errors}
      />
      :
      <>
      <Switch>
        <Route path="/" exact component={() => <Home user={user} refresh={refresh} setRefresh={setRefresh} household={household} handleLogOut={handleLogOut}/>} /> 
      </Switch>
      <Switch>
        <Route path="/new-chore" exact component={() => <ChoreForm user={user} refresh={refresh} setRefresh={setRefresh}/>} />
      </Switch>
      <Switch>
        <Route path="/signup" exact component={() => <NewMember 
                                                        refresh={refresh} 
                                                        setRefresh={setRefresh} 
                                                        handleLogOut={handleLogOut} 
                                                        user={user} setUser={setUser} 
                                                        setIsParent={setIsParent}
                                                        errors={errors}
                                                        setErrors={setErrors}/>} />
      </Switch>
      </>
      }
    </Router>
  );
}

export default App;
