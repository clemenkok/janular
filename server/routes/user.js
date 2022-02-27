import express from 'express';

import { signin, signup } from '../controllers/user.js'

const router = express.Router();

// frontend sends data to backend, backend does something - POST request
router.post('/signin', signin);
router.post('/signup', signup);

export default router;