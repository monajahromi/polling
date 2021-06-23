import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import React, { useState,useEffect } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';



const ThirdQuestion = () => {

    const[answer , setAnswer] = useState('');
   
   
    const handleChange = (event) => {
        localStorage.setItem("thirdQuestion", event.target.value)
        setAnswer(event.target.value);
       }
    
       useEffect(()=>{
        let answerFromLocalStorage = localStorage.getItem("thirdQuestion") ; 
        if (answerFromLocalStorage )
        setAnswer( answerFromLocalStorage) ; 
    
    }, [])


    return (
        <div>
            <h3> What are some unusual mechanisms flowers in New Zealand use to get pollinated?</h3>
           
            <TextField fullWidth  onChange={handleChange}
                label="Write your answer ..."
                multiline
                rows={2}
                value={answer} 
                variant="outlined"
                />


        </div>
    );
};

export default ThirdQuestion;