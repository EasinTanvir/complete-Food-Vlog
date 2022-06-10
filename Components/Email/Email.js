import { useRef } from "react"
import axios from 'axios';
import classes from './email.module.css'

export default function Email() {

  

    const emailRef = useRef()

   async function onSubmitHandler(e){
        e.preventDefault()
        const email = emailRef.current.value;
        const recData = {
            email
        }

     const result =await axios.post('/api/foods',recData)


    }
       
  return (
    <form onSubmit={onSubmitHandler} className={classes.email}>
        <label>Email</label>
        <input placeholder="type your email" ref={emailRef} required type='email'/>
        <button>Send</button>
    </form>
  )
}
