import db from "../db.js";

export async function heartBeat(req,res){
    try {
        const health = await db.collection("health").find({}).toArray();
        res.send(health[0].message);
    } catch (err) {
        console.log(err);
        res.status(500).send('Erro inesperado');
    }
}