import { Router } from 'express';
import db from '../server.js';
const router = Router();

router.get('/users', (req, res) => {
	const alle = db.prepare('SELECT * FROM users').all();
	res.json(alle);
});

router.get('/users/:id', (req, res) => {
	const id = req.params.id;
	const user = db.prepare('SELECT * FROM users WHERE id=?').get(id);
	if (user == null) {
		return res.status(404).json({ fehler: 'User nicht gefunden.' });
	}
	res.json(user);
});

router.post('/users', (req, res) => {
	const { username, password } = req.body;
	const newUser = db
		.prepare('INSERT INTO users (username, password) VALUES (?,?)')
		.run(username, password);
	res.status(201).json(newUser);
	console.log(`Neuer Benutzer erstellt mit Benutzernamen ${username}`);
});

router.delete('/users/:id', (req, res) => {
	const id = req.params.id;
	db.prepare('DELETE FROM users WHERE id = ? ').run(id);
	res.status(204);
	console.log(`User with id: ${id} deleted.`);
});

export default router;
