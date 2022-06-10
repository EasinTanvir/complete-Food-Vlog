import axios from 'axios';

export async function AllPost(){

    const response = await axios.get('https://food-708f4-default-rtdb.firebaseio.com/foods.json');
    const result = Object.values(response.data);
    return result;

}



export async function Featureds(){

    const featured = await AllPost();

    const result = featured.filter((data)=>data.featured)
    return result

}


export async function FireDetails(id){

    const allposts = await AllPost()
    const result = allposts.find((data)=>data.id===id)

    return result

}


export async function FilterData(recData){

    const {year,month} = recData;

    const alldata = await AllPost()

    const result = alldata.filter((event)=>{
        const myDate = new Date(event.create)
        return myDate.getFullYear()===year && myDate.getMonth()===month-1
    })

    return result


}
