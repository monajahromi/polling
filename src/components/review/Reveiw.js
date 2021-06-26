import React, { useEffect } from 'react';

const Reveiw = () => {
    useEffect(()=>{
        
        // returned function will be called on component unmount 
        return ()=>{
            console.log("Done")
             localStorage.setItem("pollingFinished",true) 
        } 

    },[])


    return (
        <div>
            <div>Q1. Which among the following is not a true fruit?</div>
              { localStorage.getItem("firstQuestion") }
            <div>Q2.Fruits of this plant are found underground :</div>
              { localStorage.getItem("secondQuestion") }
              <div>Q3. What are some unusual mechanisms flowers in New Zealand use to get pollinated?</div>
              { localStorage.getItem("thirdQuestion") }  
        </div>
    );
};

export default Reveiw;