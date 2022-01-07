import React , {Component} from 'react';
import './App.css';
import {useState} from 'react';

function App(){ 

  const[calc, setCalc] = useState("");
  const [result, setResult]= useState("");

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

    setCalc(value);
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
     <button onClick = {()=>updateCalc("1")}>1</button>
     <button onClick = {()=>updateCalc("2")}>2</button>
     <button onClick = {()=>updateCalc("3")}>3</button>
     <button onClick = {()=>updateCalc("*")}>*</button>
     <button onClick = {()=>updateCalc("4")}>4</button>
     <button onClick = {()=>updateCalc("5")}>5</button>
     <button onClick = {()=>updateCalc("6")}>6</button>
     <button onClick = {()=>updateCalc("+")}>+</button>
     <button onClick = {()=>updateCalc("7")}>7</button>
     <button onClick = {()=>updateCalc("8")}>8</button>
     <button onClick = {()=>updateCalc("9")}>9</button>
     <button onClick = {()=>updateCalc("-")}>-</button>
     <button onClick = {()=>updateCalc(".")}>.</button>
     <button onClick = {()=>updateCalc("0")}>0</button>
     <button onClick={calculate}>=</button>
     <button onClick = {()=>updateCalc("/")}>/</button>
    </div>
  );
 }
  

export default App;
