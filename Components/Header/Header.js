import {signOut} from 'next-auth/react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import classes from './header.module.css'

export default function Header() {

  const {data:session,status} = useSession()
  const loading=status==='loading'

  function onClickHandler(){
   signOut()
  }

  return (
    <div className={classes.main}>
      <header className={classes.head}>
        <div className={classes.logo}>
        {session && (<Link href='/feature'>WinRAr</Link>)}       
        </div>
        <div>
            <nav>
                <ul  className={classes.text}>
                    <li>
                    {session && (<Link href='/restaurant'>AllPosts</Link>)}
                    </li>                   
                    <li>
                    {!session && !loading && (<Link href='/'>LogIn</Link>)}
                    </li>  
                    {session && (<button onClick={onClickHandler}>LogOut</button> )}                
                </ul>
            </nav>
        </div>
    </header>
    </div>
  )
}
