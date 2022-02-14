import db from '../db.js';
import checkoutSchemma from '../schemas/checkoutSchemma.js';
import { ObjectId } from 'mongodb';

export default async function validateCheckout(req, res, next){
    
    const validation = checkoutSchemma.validate(req.body);

    if(validation.error) {
        return res.sendStatus(422);
    }

    const verifyCard = await db.collection('cards').findOne({ _id: new ObjectId(req.body.cardId)});

    if (!verifyCard) {
        return res.sendStatus(422);
    }


    if (verifyCard.userId.toString() !== res.locals.userId.toString()) {
        return res.sendStatus(401);
    }


    next();
}