import './App.css';
function App() {
  return (
    <div>
       <User />
       <Job jobTitle='Boss' age={45} salary={550}  />
    </div>
  );
}
const User=()=>{
  return(
    <div>
    <h1>first react App</h1>
    <h3>Members</h3>
    </div>
  );
}

const Job=(props)=>{
  return(
    <div>
      <p>{props.jobTitle}</p>
      <p>{props.age}</p>
      <p>{props.salary}</p>
    </div>


  );
}
export default App;
