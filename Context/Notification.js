import classes from './notification.module.css';


export default function Notification(props) {
    const {title,status} = props;

    let allnotify = '';

    if(status==='pending'){
        allnotify=classes.pending
    }  if(status==='success'){
        allnotify=classes.success
    }  if(status==='Request failed with status code 404'){
        allnotify=classes.error
    }

    const result = `${classes.notification} ${allnotify}`

  return (
    <div className={result}>
        <h2>{title}</h2>
    </div>
  )
}
