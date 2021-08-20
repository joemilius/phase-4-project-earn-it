import './App.css';
import React, {useState, useEffect} from 'react'
import LoginPage from './Components/LoginPage';

function App() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    setIsLoading(true)
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    });
    setIsLoading(false)
  }, []);

  if (!user) {
    return <LoginPage setUser = {setUser} setIsLoading = {setIsLoading}/>
  }
  
  return (
    <div className="App">
      { isLoading 
      ?
      <h1>Page is Loading...</h1>
      :
      <h1>Home Page</h1>
      }
    </div>
  );
}

export default App;