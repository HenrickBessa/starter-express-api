import express from 'express';
import bodyParser from 'body-parser';
import firebase from 'firebase-admin';
import serviceAccount from './credentials.json' assert { type: 'json' };
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(bodyParser.json());

const firebaseConfig = {
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://tabelasapp-4a190-default-rtdb.firebaseio.com'
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export default { database }


import usuarioRoutes from './src/routes/usuario.route.js';
// import livroRoutes from './src/routes/livroRoutes.js';
// import generoRoutes from './src/routes/generoRoutes.js';


app.use('/usuarios',usuarioRoutes);
// app.use('/livros', livroRoutes);
// app.use('/generos', generoRoutes);


app.listen(PORT, () => {
  console.log('Servidor rodando na porta ' + PORT);
});