import {useRef} from 'react'
import {useRouter} from 'next/router'
import classes from './date.module.css'

export default function Calander() {

    const router = useRouter()

    const yearRef = useRef()
    const monthRef = useRef()

    function OnSubmitHandler(e){
        e.preventDefault()

        const year = yearRef.current.value;
        const month = monthRef.current.value;

        router.replace(`/restaurant/${year}/${month}`)
       
    }

  return (
    <form
    onSubmit={OnSubmitHandler}
     className={classes.date}>
        <div>
            <label>Year</label>
            <select ref={yearRef}>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
                <option value='2022'> 2022</option>
            </select>
        </div>
        <div>
        <label>Month</label>
            <select ref={monthRef}>
                <option value='1'>January</option>
                <option value='2'>February</option>
                <option value='3'>March</option>
                <option value='4'>April</option>
                <option value='5'>May</option>
                <option value='6'>June</option>
                <option value='7'>July</option>
                <option value='8'>August</option>
                <option value='9'>September</option>
                <option value='10'>Octomber</option>
                <option value='11'>November</option>
                <option value='12'>December</option>
            </select>
        </div>
        <button>Submit</button>
    </form>
  )
}
