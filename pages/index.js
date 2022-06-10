import { getSession } from "next-auth/react"
import LogIns from "../Components/LogIn/LogIns"


export default function LogIn(){
  return (
    <div>
     <LogIns />
    </div>
  )
}



export async function getServerSideProps(context){

  const session =await getSession({req:context.req})

  if(session){
    return {
      redirect:{
        destination:'/feature',
        parmanent:false
      }
    }
  }


  return {
    props:{session}
  
  }

}