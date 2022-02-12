import db from '../db.js';

export async function getProducts (req, res) {
  try {
    const products = await db.collection('products').find({}).toArray();
    res.send(products);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}