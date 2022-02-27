import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';

// hide API Keys
import dotenv from 'dotenv';

// Initialise App with ExpressJS
const app = express();
dotenv.config();


app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

// Every route inside posts starts with posts
app.use('/posts', postRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.send('APP IS RUNNING.');
})
// https://www.mongodb.com/cloud/atlas
// Heroku will later connect via process.env.PORT

const PORT = process.env.PORT || 5000;

// Not necessary but prevents warnings
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port:${PORT}`)))
    .catch((error) => console.log(error.message));

/*
CI/CD Pipeline

(1) v1.0 Community
- Whole community can see, most popular idea funnels to the top to connect users worldwide.

(2) v2.0 Organisational
- Janus for Organisations
- Private page for organisations - shareable link where you can send your organisation's page to others to send in data (viewable only via your link)
*/