import classes from './item.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../Button/Button'

export default function FeatureItem(props) {
    const {title,bio,date,id,location,image} = props
    const imagepath = `/images/${image}`
    const human = new Date(date).toLocaleDateString('en-US',{
      day:'numeric',
      month:'long',
      year:'numeric'
    })
  return (
       
         <div className={classes.main}>
        <div className={classes.image}>
        
        <Image alt={title} src={imagepath} width={200} height={200}/>
        </div>
           <div className={classes.text}> 
           <h1>{title}</h1>
            <p>{bio}</p>
            <p>{human}</p>       
            <p>{location}</p>          
           </div>   
           <div className={classes.btn}>
           <Button><Link href={`/restaurant/${id}`}>Go for Details</Link></Button>          
           </div>          
        </div>
       
    
      

  )
}
