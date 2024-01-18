import express from 'express';

const app = express();

import { quotes } from './data.js';
import { getRandomElement } from './utils.js';

const PORT = process.env.PORT || 4001;

app.use(express.static('public')); 

