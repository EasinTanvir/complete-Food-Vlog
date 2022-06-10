import {hash,compare} from 'bcryptjs'
export async function UniquePassword(password){

    const pass = await hash(password,12);
    return pass

}

export async function ComparePassword(hashpass,password){

    const verify = await compare(hashpass,password)
    return verify

}