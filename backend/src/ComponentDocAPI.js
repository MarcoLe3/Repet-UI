import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
const app = express();
import ComponentData from '../json/ComponentDoc.json' with {type: 'json'};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
    path: path.resolve(__dirname, '../../.env')
});

const PORT = process.env.PORT;

const allowedOrigins = [
    'http://localhost:5173'
];

app.use(cors({
    origin: allowedOrigins
}));

app.get('/Documentation', (req, res) => {
    res.json(ComponentData);
});

app.listen(PORT, () => {
    console.log(`Component Documentation API is running on port ${PORT}`);
});

