import React , {useState} from 'react';
import './App.css';


function App(){ 

  const[calc, setCalc] = useState("");
  const [result, setResult]= useState("");
  
  const calcButtons = [
    '1','2','3','*','4','5','6','+','7','8','9','-','.','0'
  ]

  const operators= ["/", "+", "-", "*", "."];

  const updateCalc = value =>{
    if (
      operators.includes(value) && operators.includes(calc.slice(-1)) ||
      operators.includes(value) && calc===''
    )
    {
      return;
    }

    setCalc(calc + value);

    if (!operators.includes(value)){
      setResult(eval(calc + value).toString())
    }
  }

  const calculate =()=>
  {
    setCalc(eval(calc).toString());
    setResult("");
    
  }

  const deleteLast = ()=>{
    if(calc==''){
      return;
    }
    const value = calc.slice(0,-1);

    setCalc(value)
  }

  const allClear =() =>{
    setResult("");
    setCalc("");
  }
  return (
    <div className='calculator-grid'>
       <div className='output'>
          {result ? <span>({result})</span> : ''}<span></span>{ calc || "0"}
            
        </div>

     
     <button className='span-two' onClick = {(allClear)}>AC</button>
     <button className='span-two' onClick={deleteLast}>DEL</button> 
{
  calcButtons?.map(item =>  <button onClick = {()=>updateCalc(item)}>{item}</button>)}

     <button onClick={calculate}>=</button>
     <button onClick = {()=>updateCalc("/")}>/</button>
    </div>
  );
 }
  

export default App;
