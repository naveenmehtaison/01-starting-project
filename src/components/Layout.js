import { useState } from "react"
import React from "react"
const Layout=(props)=>{
    // const[isvisible,setisvisble]=useState(false)

    const errorHandler=()=>{
        props.setisvisble(false)
    }
    // console.log('iam in layout',props.)
    return(
        <div>
            
            <div>
                <h2>Please enter valid data</h2>
                <button type='submit' onClick={errorHandler}>Okay</button>  
            </div>      

            

                  
        </div>
    )
}
export default Layout