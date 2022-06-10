import  CredentialsProvider  from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';
import helper from '../../../Components/Helper/helper';
import { ComparePassword } from '../../../Components/Helper/auth';

export default NextAuth({
    providers:[

        CredentialsProvider({
            async authorize(credentials){
                const client = await helper();
                const db = client.db()
                const user = await db.collection('signin').findOne({email:credentials.email})

                if(!user){
                    client.close()
                    throw new Error('no user found')
                }

                const currentPass= user.password;
                const verifyPass = await ComparePassword(credentials.password,currentPass)

                if(!verifyPass){
                    client.close()
                    throw new Error('password invalid')
                }

                client.close()             

                return {email:user.email}
                
                   


            }
        })
    ]
})