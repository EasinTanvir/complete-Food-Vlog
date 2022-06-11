import {getSession} from 'next-auth/react'
import Comment from "../../Components/Comment/Comment"
import GetComment from "../../Components/Comment/GetComment"
import { AllPost, FireDetails } from "../../Components/DataBase/FireBase"
import Details from "../../Components/Details/Details"


export default function PostDetails(props) {
 
  const {list} = props

  
 
  return (
    <div>
      <Details lists={list}/>
      <Comment userId={list.id}/>
      <GetComment userId={list.id}/>
    </div>
  )
}


export async function getServerSideProps(constext){

  const text = await getSession({req:constext.req})

  if(!text){

    return {
      redirect:{
        destination:'/',
        parmanent:false
      }
    }

  }

  const {params} = constext;
  const userId = params.details;

  const result =await FireDetails(userId)

  if(!result){
    return {
      notFound:true
    }
  }

  return {
    props:{
      list :result
    }
   
   
  }

}

// export async function getStaticPaths(){

//   const allpost = await AllPost()
//   const userId = allpost.map((event)=>({params:{details:event.id}}))
  


//   return {
//     paths:userId,
//     fallback:'blocking'
//   }

// }
