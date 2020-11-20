import logo from './logo.svg';
import './App.css';

function App() {

  let message="hello World";
  let exNumber=1;
  let exBoolean=true;
  let exObject={name:"Naga"};
  let exArray=["Apple","Pisang","Melon"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>{message}</h1> */}
       <Hello name="BUD1"/>
        <p>Number : {exNumber}</p>
        <p>Boolean : {exBoolean ? "Benar":"Salah"}</p>
        <p>Boolean : {exBoolean ? <strong>Benar</strong> :<em>Salah</em>}</p>
        <p>Object : {exObject.name}</p>
        <p>Array : {exArray.length}</p>
        <ul>
          {
            exArray.map((item,index)=>(
             <li key={index}>{item}</li>
            ))
          }
        </ul>
      </header>
    </div>
  );
}
function Hello({name}){
  return(
    <h1>Hello {name}</h1>
  )
}
export default App;
