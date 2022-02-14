import db from "../db.js";
import userSerSchema from "../schemas/userSchema.js";
import { stripHtml } from 'string-strip-html';
import bcrypt from 'bcrypt';

export default async function userSchemaValidationMiddleware(req, res, next){
    const user = req.body;

    const validation = userSerSchema.validate(user);
    if(validation.error)
        return res.sendStatus(422);

    user.email = stripHtml(user.email).result.trim();
    res.locals.user = user;

    try {
        const consult = await db.collection("users").findOne({email: user.email});
    
        if (!consult || !bcrypt.compareSync(user.password, consult.password))
            return res.sendStatus(401);
    
        res.locals.user = consult;
        next();
        
    } catch (err) {
        return res.status(500).send(err);
    }
}