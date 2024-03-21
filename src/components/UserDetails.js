import { useState } from "react"
import SubmitData from "./SubmitData"
import './Form.css'
import Layout from "./Layout"
const UserDetails=(props)=>{
    const[isvisible,setisvisble]=useState(false)
    const [username,setusername]=useState('')
    const [age,setuserage]=useState('')
    const [totaldata,settotaldata]=useState([])
    const [valid,setvalid]=useState(true)    
    const handleFormSubmit=(event)=>{
        event.preventDefault()
        if(username.trim().length===0){
            console.log("lengthissmall")
            setvalid(false)
            setisvisble(true)
            return 
        }
        else if(parseInt(age)<0){
            console.log('ageisnegaive')
            setvalid(false)
            setisvisble(true)
            return 
        }
        const newdata = {username,age}
        settotaldata([...totaldata,newdata])
        props.passdata(totaldata)

    }
    const usernamefunc=(event)=>{
        setusername(event.target.value)
    }
    const agefunc=(event)=>{
        setuserage(event.target.value)


    }
    // const [formdata,setformdata]=useState({username:'',age:''})
   
    
    
    // if(valid){
        return(
            <div>
                {isvisible && <Layout setisvisble={setisvisble}/>}

                      
                <form onSubmit={(e)=>handleFormSubmit(e)}>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label for='username' >Username</label>
                            <input id='username' type='text' onChange={(e)=>usernamefunc(e)} value={username}/>
                            <label for='age'>Age</label>
                            <input id='age' type='number' onChange={(e)=>agefunc(e)} value={age}/>
                            <button type='submit' >Submit Age</button>
                        </div>

                    </div>

                </form>
            </div>
        )
    // }
    // else{
    //     return(
    //         <Layout/>
    //     )
    // }
}
export default UserDetails

