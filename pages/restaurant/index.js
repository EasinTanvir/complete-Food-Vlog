import {getSession} from 'next-auth/react'
import Calander from "../../Components/Calander/Calander"
import { AllPost } from "../../Components/DataBase/FireBase"
import Featured from "../../Components/Posts/featured"



export default function AllPosts(props) {
  const {list} = props
  return (
    <div>
      <Calander />
      <Featured lists={list}/>
    </div>
  )
}

export async function getServerSideProps(context){

  const session = await getSession({req:context.req})
  if(!session){
    return {
      redirect:{
        destination:'/',
        parmanent:false
      }
    }
  }

  const result =await AllPost()

  return {
    props:{
      list : result
    }
   
  }

}
