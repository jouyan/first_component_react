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
    <h1>first react App</h1>
    <h2>Members</h2>
  );
}

const Job=(props)=>{
  return(
    <div>
    <h1>{props.jobTitle}</h1>
    <h1>{props.age}</h1>
    <h1>{props.salary}</h1>
    </div>


  );
}
export default App;
