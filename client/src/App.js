import React, {useState} from 'react';
import './App.css';

function App (){
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  
  const handleSubmit = event => {
    event.preventDefault()
    console.log(firstName)
    const jsonData = {firstName}
    console.log(jsonData)
    // Send data to the backend with POST
    fetch('/submit', {   
      method: 'POST', 
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(jsonData) 
    }).then(lastName => lastName.text().then(data => {setLastName(data)}))
  }

  return (
    <div className="App">
      <header className="App-header">
        <label>
          Your Input Request to Server:
        </label>
        <form onSubmit={handleSubmit}> 
          <input
            type="textarea"
            name="serverInput"
            onChange={event => {setFirstName(event.target.value)}}
          />
          <input type ="submit"/>
        </form>
        <label>
          Response from Server:
        </label>
        <label>
          {lastName}
        </label>
      </header>
    </div>
  );
} 

export default App;
