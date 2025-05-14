
import express from 'express';
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

ViteExpress.listen(server, 3000, async () => console.log('server is runing'));


