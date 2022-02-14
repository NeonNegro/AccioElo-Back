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

export async function getCards (req, res) {
    try {
        const userId = res.locals.userId;

        const cards = await db.collection('cards').find({userId: new ObjectId(userId)}).toArray();

        res.send(cards);        
    } catch (error) {
        console.log(err);
        res.sendStatus(500);
    }
}

export async function deleteCard (req, res) {
    try {
        const id = req.params.id;

        const verifyCard = await db.collection('cards').find({_id: new ObjectId(id)}).toArray();

        if (!verifyCard) {
            return res.sendStatus(422);
        }

        await db.collection('cards').deleteOne({_id: new ObjectId(id)});

        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}