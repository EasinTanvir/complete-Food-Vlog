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


export async function getStaticProps(constext){

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

export async function getStaticPaths(){

  const allpost = await AllPost()
  const userId = allpost.map((event)=>({params:{details:event.id}}))
  


  return {
    paths:userId,
    fallback:'blocking'
  }

}
