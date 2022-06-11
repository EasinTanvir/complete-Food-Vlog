const { PHASE_DEVELOPMENT_SERVER } =require('next/constants')

module.exports=(phase)=>{
  if(phase===PHASE_DEVELOPMENT_SERVER){
  return {
    env:{
      username:'tanvir',
      password:'tanvir',
      cluster:'cluster0',
      database:'resvlog',
    }
  }
}


return {
  env:{
    username:'tanvir',
    password:'tanvir',
    cluster:'cluster0',
    database:'pro1resvlog',    
    NEXTAUTH_URL:'https://complete-food-vlog.vercel.app'
  
  }
}



}