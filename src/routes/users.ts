import { Router } from 'express';
import db from '../server';

const router = Router();

router.get('/users', (req, res) => {
    const alle = db.prepare('SELECT * FROM users').all();
	res.json(alle);
});

router.get('/users/:id', (req, res) => {
	const id = req.params.id;
    const user = db.prepare('SELECT * FROM users WHERE id=?').get(id);
	res.send(user);
});

router.post('/users', (req, res)=>{
    const {username, password} = req.body;
    const newUser = db.prepare('INSERT INTO users (username, password) VALUES (?,?)').run(username, password);
    res.send(newUser);
    console.log(`Neuer Benutzer erstellt mit Benutzernamen ${username}`);
})

export default router;
