import db from "../db.js";
import bcrypt from 'bcrypt';
import {v4 as uuid} from 'uuid';

export async function signUp(req, res){
    const user = res.locals.user;

    try {
        const usersCol = db.collection('users');
        const passwordHash = bcrypt.hashSync(user.password, 10);
        user.password = passwordHash;

        await usersCol.insertOne(user);

        res.sendStatus(201);
        
    } catch (err) {
        send.status(500).send(err);
    }
}

export async function signIn(req, res){
    const user = res.locals.user;

    const token = uuid();

    try {
            await db.collection("sessions").insertOne({token, userId: user._id});
    
            delete user.password;
            user.token = token;
    
            res.send(user);
    } catch (err) {
        send.status(500).send(err);
    }
}


export async function signOut(req, res){
    const{ _id} = res.locals.user;
    try {
        await db.collection("sessions").deleteOne({userId: _id});
        res.sendStatus(200);
    } catch (err) {
        res.status(500).send(err);
    }
}