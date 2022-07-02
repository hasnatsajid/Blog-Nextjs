import { connectToDatabase } from '../../../utils/database';

export default async function categoryPosts(req, res) {
  // Get data from database
  const { method } = req;

  if (method === 'GET') {
    const { db } = await connectToDatabase();

    const categories = await db.collection('categories').find().toArray();

    res.status(200).json(categories);

    return;
  }

  res.status(404).json({ error: 'Invalid request' });
}
