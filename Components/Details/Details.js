import classes from './details.module.css'
import Image from 'next/image'

export default function Details(props) {


    const{lists } = props
    const {title,bio,create,location,image,id} = lists
    const path = `/images/${image}`
    const human = new Date(create).toLocaleDateString('en-US',{
      day:'numeric',
      month:'long',
      year:'numeric'
    })
  return (
    <div className={classes.head}>  
    <div className={classes.image}>
      <Image alt={title} src={path} width={200} height={200}/>
    </div>
    <div className={classes.text}>
      <h1>{title}</h1>
      <p>{bio}</p>
      <h3>{human}</h3>
      <p>{location}</p>
    </div>
    </div>
  )
}
