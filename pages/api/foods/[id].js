
import helper from '../../../Components/Helper/helper'

export default async function Email(req,res){

    if(req.method==='POST'){

        const data = req.body;

        const {name,email,comment} = data;

        if(!name || !email || !email.includes('@') ){
            res.status(500).json({message:'invalid data'})
        }

        const recData = {
            name,
            email,
            comment
        }

        let client

        try{
             client = await helper()
        }catch(error){           
            res.status(700).json({message:'connect with database failed'})
            return

        }

       
        const db=client.db()
        const result = await db.collection('comment').insertOne(recData)

        client.close()
        res.status(200).json({message:'comment submit successfully'})

    }if(req.method==='GET'){

        let client
        try{
             client = await helper()
        }catch(error){
            res.status(800).json({message:'connect with database failed'})
            return
        }

       
        const db = client.db()
        const result = await db.collection('comment').find().sort({_id:-1}).toArray()

        client.close()
        res.status(200).json({message:'fetch data successfully',mycomment:result})


    }

}