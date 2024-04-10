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
      <h1>Second (2th) Part:</h1>
      <p>Details:<p/>
    </div>
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
