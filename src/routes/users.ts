import {Router} from "express";

const router = Router();

router.get('/users', (req, res)=> {
    res.send('Alle Users sind hier');
});

router.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    res.send(`User mit id: ${id}`)
})

export default router;