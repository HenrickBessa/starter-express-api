import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sendMessage, formClient } from './src/controller/messageController.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/send-message', sendMessage);
app.post('/api/form-client', formClient);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});