import db from '../db.js';

export default async function authMiddleware(req, res, next){
    
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }

  const session = await db.collection("sessions").findOne({ token });

  if (!session) {
    return res.sendStatus(401);
  }

  res.locals.userId = session.userId;

  next();
}