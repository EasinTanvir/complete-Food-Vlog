import Link from 'next/link'
import classes from './button.module.css'

export default function Button(props) {
  return (
    <div className={classes.button}>
       <button>{props.children}</button>
    </div>
  )
}
