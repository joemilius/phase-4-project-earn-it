import React, {useState, useEffect} from 'react'
import LoginPage from './Components/LoginPage';
import Home from './Components/Home' 
import Navbar from './Components/Navbar/Navbar';
import ChoreForm from './Components/ChoreForm';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null)
  const [chores, setChores] = useState([])
  console.log(user)
  console.log(chores)
    
  useEffect(() => {
      fetch(`/chores`)
      .then(response => response.json())
      .then(data => {
          setChores(data)
      })
  },[])
  
  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogOut() {
    fetch("/logout", { method: "DELETE"}).then((resp) => {
      if (resp.ok) {
        setUser(null);
      }
    })
  }

  return (
    <Router>
      <Navbar user={user} handleLogOut={handleLogOut} />
      { !user 
      ? 
      <LoginPage setUser = {setUser}/>
      :
      <>
      <Switch>
        <Route path="/" exact component={() => <Home user={user} chores={chores}/>} /> 
      </Switch>
      <Switch>
        <Route path="/new-chore" exact component={() => <ChoreForm user={user} chores={chores} setChores={setChores}/>} />
      </Switch>
      </>
      }
    </Router>
  );
}

export default App;