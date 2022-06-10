import { useContext } from 'react'
import AllContext from '../../Context/Context'
import axios from 'axios'
import { useState } from 'react'
export default function GetComment(props) {
    const mycontext = useContext(AllContext)
    const {userId} = props

    const [input,setInput] = useState([])
  

   async function onClickHandler(){

    mycontext.showContext({
        title:'pending',
        status:'pending'
    })

        const result = await axios.get(`/api/foods/${userId}`) 
        
        mycontext.showContext({
            title:'success',
            status:'success'
        })
        
       
        
      


      
       

    setInput(result.data.mycomment)

    }

    if(!input){
        return 'loading..'
    }

    const renderList = input.map((data)=>{
        return (
            <div key={data._id}>
            <h2>{data.name}</h2>
            <p>{data.email}</p>
            <h4>{data.comment}</h4>
            </div>
        )
    })

  return (
    <div>
    <button onClick={onClickHandler}>
    GetComment
    </button>
    <div>
        {renderList}
    </div>
    </div>
  )
}
