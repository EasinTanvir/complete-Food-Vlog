import {useContext} from 'react';
import Header from "./Header";
import Notification from '../../Context/Notification'
import AllContext from "../../Context/Context";


export default function Layout(props) {

  const mycontext = useContext(AllContext)
  const main = mycontext.notificatin

  return (
    <div >
    <Header />
        <main>
        {props.children}
        {main && <Notification title={main.title} status={main.status}/>}
        </main>
    </div>
  )
}
