import './App.css';
import Data from './data.js';

import { useState } from 'react';

function Form() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [cvv, setCVV] = useState('')
  const [error, setError] = useState(false)

  /*const handleName = (e) => {
    const inputText = e.target.value;
    const regex = /\d/g;
    const found = inputText.match(regex);
    // const errors ={};
      console.log(found); 
      // console.log(typeof found);
      if (found !== null) {
        // Access the length property or perform other operations
        const length = found.length;
        console.log(length);
        console.log('Numbers are not accepted in name')
        // errors.name = "Cardholder name required"; // this mesage needs to be shown if name contains numbers
      } 
      else {
        // Found not contain any numbers.
        console.log('Cardname not contain any numbers, so proceed');
      }
  };*/

  const handleSubmit = (e) =>{
    e.preventDefault();
    // const inputText = e.target.value;
    // console.log(inputText);
    // const regex = /\d/g;
    // const found = inputText.match(regex);
    // console.log(found);
    // if (found !== null) 
    if(name.length === 0 || number.length === 0)
      {
        setError(true)
    }
    console.log(name, number,month,year, cvv)
  }

  return (
    <div className="Form" >
      <form onSubmit={handleSubmit}>
        <div className='nameField'>
          <label>CARDHOLDER NAME</label><br />
          <input 
            id='name'
            className='name'
            placeholder = "e.g Jane Appleseed" 
            type='text' 
            // value = 'name'
            onChange={e=>setName(e.target.value)}
          />
        </div>
        {error&&name.length<=0?<label style={{color: 'red'}}>Cardholder name required </label>:"" }
        {/* <p> {errors.name} </p> */}
        <div  className='numberField'>
          <label>CARD NUMBER</label><br />
          <input 
            id='number'
            className='number'
            placeholder = "e.g. 1234 5678 9123 0000" 
            type='text' 
            // pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" 
            onChange={e=>setNumber(e.target.value)}
          />
        </div>
        {error&&number.length<=0?<label style={{color: 'red'}}>Card number required</label>:"" }
       <div>
         <div  className='dateField'>
            <label>EXP.DATE(MM/YY)</label><br/>
            <input 
              id='month'
              className='month'
              placeholder = "MM" 
              type='number' 
              min="1" max="12" 
              onChange={e=>setMonth(e.target.value)} 
            />
            {error&&month.length<=0?<label style={{color: 'red'}}>Month required</label>:"" } 
            <input 
              id='year'
              className='year'
              placeholder = "YY" 
              type='number' 
              onChange={e=>setYear(e.target.value)}
            />
            {error&&year.length<=0?<label style={{color: 'red'}}>Year required</label>:"" } 
            <label>CVV</label> 
            <input 
              id='cvv'
              className='cvv'
              placeholder = "e.g. 123" 
              type='number' 
              onChange={e=>setCVV(e.target.value)} 
            />
            {error&&cvv.length<=0?<label style={{color: 'red'}}>CVC must be numeric</label>:"" } 
          </div>
        </div>
        
        <button>
          Confirm
        </button>
      </form>
      <Data/>
    </div>

  );
}

export default Form;

