import React from 'react'
import { FilterData } from '../../Components/DataBase/FireBase'
import Error from '../../Components/Error/Error'
import MyError from '../../Components/Error/MyError'
import Featured from '../../Components/Posts/featured'

export default function FilterEvents(props) {
  const {list} = props

  if(props.errors){
    return <Error />
  }

  if(props.myerrors){
    return <MyError />
  }
 
 
  return (
    <div>
      <Featured lists={list}/>
    </div>
  )
}


export async function getServerSideProps(context){

  const {params} = context

  const myDate= params.filter

  const year = myDate[0]
  const month = myDate[1]

  const numYear = +year
  const nummonth = +month

  if(isNaN(numYear) || isNaN(nummonth) || numYear<2019 || numYear>2023 || nummonth<1 || nummonth>11){
    return {
     props:{errors:true}
      }
  }

  const allData = {
    year:numYear,
    month:nummonth
  }

  const result = await FilterData(allData)

  if(!result || result.length===0){
    return {
      props:{myerrors:true}
      }
  }


  return {
    props:{
      list : result
    }
  }
 




}
