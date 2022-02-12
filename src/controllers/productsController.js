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

export async function getCategories (req, res) {
  try {
    const categories = await db.collection('categories').find({}).toArray();
    res.send(categories);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}