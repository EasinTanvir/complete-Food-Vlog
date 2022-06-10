import {MongoClient} from 'mongodb'

export default async function helper() {
  const database = `mongodb+srv://${process.env.username}:${process.env.password}@${process.env.cluster}.j34xwzp.mongodb.net/${process.env.database}?retryWrites=true&w=majority`
  const client = await MongoClient.connect(database)
  return client
}
