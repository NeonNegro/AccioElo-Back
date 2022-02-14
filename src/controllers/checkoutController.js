import db from '../db.js';
import { ObjectId } from 'mongodb';

export async function addCard (req, res) {
    try {
        const userId = res.locals.userId;
        
        const card = req.body;

        card.userId = new ObjectId(userId);
        
        await db.collection('cards').insertOne(card)

        res.sendStatus(201);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}