
/*import express from 'express';
import { MongoClient } from 'mongodb';
import ViteExpress  from 'vite-express';


const CONNECTION_STRING = "mongodb+srv://umaraahmed12:GAX67QrBqV3nhfHF@sponsor.iafgbit.mongodb.net/?retryWrites=true&w=majority&appName=sponsor";

const client = new MongoClient(CONNECTION_STRING);
const database = client.db('sponsor');

const server = express();

server.get("/message", (_, res) => res.send("hello"));

server.get('/api/donations', async (_, response) => {
    const productsCollection = database.collection('donations');
  const productsCollectionData = await productsCollection.find().toArray();

  response.json(productsCollectionData);
}

)

ViteExpress.listen(server, 3000, async () => console.log('server is runing'));*/


import express from 'express';
import { MongoClient } from 'mongodb';
import ViteExpress from 'vite-express';
 
// Your MongoDB connection string
const CONNECTION_STRING =
  "mongodb+srv://umaraahmed12:GAX67QrBqV3nhfHF@sponsor.iafgbit.mongodb.net/?retryWrites=true&w=majority&appName=sponsor";
 
const client = new MongoClient(CONNECTION_STRING);
const server = express();
server.use(express.json()); // Needed to parse JSON requests
 
let donationsCollection;
server.get("/message", (_, res) => res.send("hello"));
server.get('/api/donations', async (_, res) => {
  try {
    const data = await donationsCollection.find().toArray();
    res.json(data);
  } catch (err) {
    console.error("Error fetching donations:", err);
    res.status(500).json({ error: "Failed to fetch donations" });
  }
});
 

server.post('/api/donations', async (req, res) => {
  try {
    const donation = req.body;
 
    if (
      !donation.name ||
      !donation.email ||
      !donation.phone ||
      !donation.type ||
      !donation.amount
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }
 
    const result = await donationsCollection.insertOne(donation);
    res.status(201).json(result);
  } catch (err) {
    console.error("Error saving donation:", err);
    res.status(500).json({ error: "Failed to save donation" });
  }
});
 
// Start ViteExpress and connect to MongoDB
ViteExpress.listen(server, 3000, async () => {
  try {
    await client.connect();
    const database = client.db("sponsor");
    donationsCollection = database.collection("donations");
    console.log("✅ Server is running at http://localhost:3000");
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB:", err);
  }
});


