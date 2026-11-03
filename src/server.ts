import express, { NextFunction, Request, Response } from 'express';
import authRouter from './routes/auth.js';
import userRouter from './routes/users.js';
import { db } from '../db.js';

const app = express();
app.use(express.json());

app.use('/', authRouter, userRouter); // Routen aus auth.ts einhängen

// app.use('/', userRouter);

app.use((req, res) => {
	res.status(404).json({ fehler: 'Nicht gefunden' });
});

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
	console.error(err);
	res.status(500).json({ fehler: 'Interner Serverfehler' });
});

app.listen(3000, () => {
	console.log('Server läuft: http://localhost:3000');
});

export default db
