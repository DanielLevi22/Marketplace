import express from 'express';
import { getPayload } from './get-payload';

const app = express();
const PORT = Number(process.env.PORT) || 3000;


const start = async () => {
  const payload = await getPayload();
}

start();  