import newCardSchemma from "../schemas/newCardSchemma.js";
import db from '../db.js';

export default async function validateCard(req, res, next){
    
    const validation = newCardSchemma.validate(req.body);

    if(validation.error) {
        return res.sendStatus(422);
    }

    const verifyCard = await db.collection('cards').findOne({ cardNumber: req.body.cardNumber});

    if (verifyCard) {
        return res.sendStatus(409);
    }

    next();
}