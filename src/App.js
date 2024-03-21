import React, { useState } from 'react';
import UserDetails from './components/UserDetails';
import SubmitData from './components/SubmitData';

function App() {
  const[alldata,setalldata]=useState([])
  const passdatafunc=(datafromuserdetails)=>{
    setalldata(datafromuserdetails)
    console.log(datafromuserdetails,'im insideappjs')

  }
  return (
    <div>
      <UserDetails passdata={passdatafunc}/>
        <div className="new-expense__controls">
            {alldata.map((ele, i) => (
                <SubmitData name={ele.username}
                age={ele.age}/>
            ))}
            
            
        </div>     
    </div>
  );
}

export default App;
