//import { MongoClient} from 'mongodb';
//import util from 'util'
//import dotenv from 'dotenv'
//dotenv.config();

//util.promisify(MongoClient.connect);

//const { MONGO_URI, MONGO_DB_NAME } = process.env;
//console.log('MONGO_URI', MONGO_URI)
//let dbConnection;

//const connect = async () => {
  //try {
   // const client = await MongoClient.connect(MONGO_URI);
   // console.log('client')
   // dbConnection = client.db(MONGO_DB_NAME);
   // console.log('connection to db successful')
 // } catch (e) {
 //   throw new Error(`Could not establish database connection: ${e}`);
 // }
//};

//const mongoClient = async () => {
  //if (!dbConnection) {
  //  await connect();
  //}
 // return dbConnection;
//};

//export default mongoClient
