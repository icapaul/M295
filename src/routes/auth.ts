import { Router } from 'express';

const router = Router();

router.get('/me', (req, res) => {
	res.send('Hier kommen später die Login-Daten');
});

export default router;
