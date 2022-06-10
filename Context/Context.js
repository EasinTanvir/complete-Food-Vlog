import {createContext, useState} from 'react';
import { useEffect } from 'react';

const AllContext = createContext({
    notificatin:null,
    showContext:function(){},
    hideContext:function(){},
})

export function ExtraContext(props){

    const [input,setInput] = useState()

    useEffect(()=>{

        const time = setTimeout(()=>{

            setInput(null)
        },3000)

        return ()=>{
            clearTimeout(time)
        }

    },[input])

    function myShowContext(recData){
        setInput(recData)
    }
    function myHideContext(){
        setInput(null)
    }

  const context = {notificatin:input,showContext:myShowContext,hideContext:myHideContext}

    return <AllContext.Provider value={context}>{props.children}</AllContext.Provider>

}

export default AllContext;