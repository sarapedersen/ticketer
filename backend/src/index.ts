import express from 'express';
import { context } from './context';
import { findAllUsers } from './handlers/exampleUserHandler';

const app = express();
app.use(express.json());
const port = 5000;

// under kommer koden for API-en

app.get('/', async (req, res) => {
  findAllUsers(context, req, res);
});

app.listen(port, () => console.log(`Serveren har startet på port: ${port}!`));
