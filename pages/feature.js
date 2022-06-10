import {getSession} from 'next-auth/react'
import Featured from "../Components/Posts/featured";
import {Featureds} from '../Components/DataBase/FireBase'
import Email from "../Components/Email/Email";

export default function FeaturedPost(props) {
  const {list} = props
  return (
  <div>
    <Email />
    <Featured lists={list}/>
  </div>
  )
}


export async function getServerSideProps(context){

  const session =await getSession({req:context.req})

  if(!session){
    return {
      redirect:{
        destination:'/',
        parmanent:false
      }
    }
  }

  

  const result = await Featureds()  

  return {
    props:{
      
      list:result
    },
  
  }

}



