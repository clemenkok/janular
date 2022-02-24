import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './posts.js';

// Initialise App with ExpressJS
const app = express();



app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

// Every route inside posts starts with posts
app.use('/posts', postRoutes);

// https://www.mongodb.com/cloud/atlas
// Heroku will later connect via process.env.PORT

const CONNECTION_URL = 'mongodb+srv://clemenkok:fmUqv0vDDnVClGqI@cluster0.5m1kw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// Not necessary but prevents warnings
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Serveer running on port:${PORT}`)))
    .catch((error) => console.log(error.message));
