import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import React, { useState, useEffect } from 'react';

const SecondQuestion = () => {
    const[answer , setAnswer] = useState('');

    
   const handleChange = (event) => {
    localStorage.setItem("secondQuestion", event.target.value)
    setAnswer(event.target.value);
   }

   useEffect(()=>{
    let answerFromLocalStorage = localStorage.getItem("secondQuestion") ; 
    if (answerFromLocalStorage )
    setAnswer( answerFromLocalStorage) ; 
   
   },[])

    return (
        
            <div>
            

            <div>  Fruits of this plant are found underground :</div>
            

            <RadioGroup   value={answer} onChange={handleChange}>
                <FormControlLabel value="apple" control={<Radio />} label="Potato" />
                <FormControlLabel value="date" control={<Radio />} label="Carrot" />
                <FormControlLabel value="grape" control={<Radio />} label="Groundnut" />
                <FormControlLabel value="plum" control={<Radio />} label="Onion" />
                
            </RadioGroup>

        </div>
        
    );
};

export default SecondQuestion;