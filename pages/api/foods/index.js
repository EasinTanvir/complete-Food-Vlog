import helper from "../../../Components/Helper/helper";


export default async function handler(req,res){

    if(req.method==='POST'){

        const data = req.body;

        const {email} = data;
        if(!email || !email.includes('@')){
            res.status(600).json({message:'email invalid'})
            return
        }

       const client = await helper();
       const db = client.db()
       const result = await db.collection('email').insertOne({email})

       client.close()
       res.status(200).json({message:'email submit successfully'})


 
    }

}