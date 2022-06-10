import { UniquePassword } from "../../../Components/Helper/auth";
import helper from "../../../Components/Helper/helper";
export default async function handler(req,res){

    if(req.method==='POST'){

        const data = req.body;
        const {email,password} = data;

        if(!email || !email.includes('@') || !password || password.trim().length<8){
            res.status(230).json({message:'*password too short'})
            return
        }

        const uniquepass = await UniquePassword(password)

        const recValues = {
            email,
            password:uniquepass
        }

        const client = await helper();
        const db = client.db()
        const existinguser = await db.collection('signin').findOne({email:email})
        if(existinguser){
            client.close()
            res.status(220).json({message:'Email already taken'})
            return
        }
        const user = await db.collection('signin').insertOne(recValues)

        
        res.status(200).json({message:'Login successfully'})
        client.close()
    }

}