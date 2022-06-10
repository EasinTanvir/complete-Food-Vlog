
import FeatureItem from './featureitem'

export default function Featured(props){
    const {lists} = props
   
  return (
    <div >
        {lists.map((data)=> <FeatureItem 
        key={data.id}
         title={data.title}
          bio={data.bio}
           date={data.create}
            id={data.id}
             location={data.location}
             image={data.image}
             />)}
    </div>
  )
}
