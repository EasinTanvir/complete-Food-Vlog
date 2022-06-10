import { useContext } from 'react';
import AllContext from '../../Context/Context';
import {useState} from 'react';
import axios from 'axios';
import classes from './comment.module.css'

export default function Comment(props) {

  const mycontext = useContext(AllContext)

  const {userId} = props;

    const [input,setInput] = useState(false)

    const recData = {name:'',email:'',comment:''}
    const [values,setValues] = useState(recData)

    function onChangeHandler(e){

        const {name,value} = e.target;

        setValues({...values,[name]:value})

    }

   async function onSubmitHandler(e){
        e.preventDefault()

        const recData = {
            name:values.name,
            email:values.email,
            comment:values.comment
        }

        mycontext.showContext({
          title:'pending',
          status:'pending'
      })

     const result = await axios.post(`/api/foods/${userId}`,recData)
      .then((res)=>
      mycontext.showContext({
        title:'success' || res,
        status:'success'
      })
      )
      .catch((error)=>

      mycontext.showContext({
        title:'error' || error,
        status:'error'
      })

      )
       
         


     

    }


  return (
   <div>
   <div className={classes.btn}>
   <button
   onClick={()=>setInput(!input)}
   >Click here to Comment</button>
   </div>
       {input ? ( <form
       onSubmit={onSubmitHandler}
        className={classes.head}>
    <h2>Comment Below</h2>
      <div className={classes.comment}>
      <div>
          <label>Name</label>
          <input onChange={onChangeHandler} name='name' placeholder='type your name' type='text'/>
      </div>
        <div>
        <label>Email</label>
          <input onChange={onChangeHandler} name='email' placeholder='type your email' type='email'/>
        </div>
      </div>
     <div>
     <label>Comment</label>
      <textarea onChange={onChangeHandler} name='comment' placeholder='type your comment' rows='5'/>
     </div>
     <button>Submit</button>
    </form>):''}
   </div>
  )
}
