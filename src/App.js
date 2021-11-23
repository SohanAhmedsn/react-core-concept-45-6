import { useEffect, useState } from 'react/cjs/react.development';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Externaluser></Externaluser>
    </div>
  );
}

function Externaluser(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  },[])


  return (
    <div className="userName">
      <h3>External User: {users.length}</h3>
    
        {
          users.map(user => <User key={user.id}
           Name={user.name} 
           id={user.id} 
           Email={user.email}>
          </User>)
        }
      
    </div>
  )
}

function User(props) {
  return (
    <div>
      <h2>Name_: {props.name}</h2>
      <h3>Email_: {props.email}</h3>
      <h4>ID: {props.id}</h4>
    </div>
  )
}


//id, name, username,email
function Counter(props){
  const [count, setCount] =useState(0);
  const handleIncrease = () => setCount(count +1);
  const handleDecrease = () => setCount(count -1);
  return (
    <div className="products">
     <h1>Count: {count}</h1>
     <button onClick={handleIncrease}>Increase: </button>
     <br />
     <button onClick={handleDecrease}> Decrese: </button>
     <br />
    </div>
    
  )
}

export default App;



    



 


      

