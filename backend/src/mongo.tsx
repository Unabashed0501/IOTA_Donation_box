
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config({ path: '.env' });
// const uri = process.env.MONGOURL!;
const uri = 'mongodb+srv://oscarfu0501:XPbX8gnJmSNauYdQ@cluster0.agdglzx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
console.log(uri)
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("IOTADB").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
