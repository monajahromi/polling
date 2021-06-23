import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import React, { useEffect, useState } from 'react';


const FirstQuestion = () => {
   const[answer , setAnswer] = useState('');
   
   const handleChange = (event) => {
    localStorage.setItem("firstQuestion", event.target.value)
    setAnswer(event.target.value);
   }

   useEffect(()=>{
    let answerFromLocalStorage = localStorage.getItem("firstQuestion") ; 
    if (answerFromLocalStorage )
    setAnswer( answerFromLocalStorage) ; 

}, [])


    return (
        <div>
            <div> Which among the following is not a true fruit?</div>
            

            <RadioGroup   value={answer} onChange={handleChange}>
                <FormControlLabel value="apple" control={<Radio />} label="Apple" />
                <FormControlLabel value="date" control={<Radio />} label="Date" />
                <FormControlLabel value="grape" control={<Radio />} label="Grape" />
                <FormControlLabel value="plum" control={<Radio />} label="Plum" />
                
            </RadioGroup>
        </div>
        
    );
};

export default FirstQuestion;