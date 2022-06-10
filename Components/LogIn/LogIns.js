import { useRouter } from 'next/router';
import axios from 'axios'
import {signIn} from 'next-auth/react'
import {useState} from 'react';
import classes from './login.module.css'

export default function LogIns() {

  const router = useRouter()

  const [error,setErrors] = useState()

  const [login,setLogin] = useState(true)

  const values = {email:'',password:''}

  const [input,setInput] = useState(values)

  function onChangeHandler(e){

    const {name,value} = e.target;

    setInput({...input,[name]:value})

  }

 async function onSubmitHandler(e){
    e.preventDefault()

    if(login){
   const result =await signIn('credentials',{
    redirect:false,
    email:input.email,
    password:input.password
   })

   if(!result.error){
    router.replace('/feature')
   }

   

    }else{
    

    const recData = {
      email:input.email,
      password:input.password
    }

   const result =await axios.post('/api/auth/signin',recData)

   setErrors(result.data)
   

  }

  }



  return (
    <div className={classes.main}>
     <div className={classes.body}>
     <div className={classes.text}>
        <h1>Welcome to WinRAr</h1>
        <h3>#Get touch by the world</h3>
      </div>
      <div className={classes.forms}>
        <form
        onSubmit={onSubmitHandler}
        >
        <h2>{login?'SignIn':'SignUp'} <hr /></h2>       
         <div>
         <label htmlFor='email'>Email</label>
          <input  name='email' onChange={onChangeHandler} id='email' placeholder='type your email' type='email' required/>
         </div>
         <div>
         <label htmlFor='pass'>Password</label>
          <input name='password' onChange={onChangeHandler} id='pass' placeholder='type your password' type='password' required/>
         </div>
         <button>Submit</button>
         <div className={classes.login}>
          <button onClick={()=>setLogin(!login)}>{login?'Create a new account':'LogIn with existing acoount '}</button>
         </div>
         {error && <h3 style={{color:'red'}}>{error.message}</h3>}
        </form>
      </div>
     </div>
    </div>
  )
}
