// Fake users data
import { connectToDatabase } from '../../utils/database';

export default async function usersHandler(req, res) {
  // Get data from database
  const { method } = req;

  if (method === 'GET') {
    const { db } = await connectToDatabase();

    const blogs = await db.collection('blogs').find().toArray();

    res.status(200).json(blogs);

    return;
  }

  res.status(404).json({ error: 'Invalid request' });
}
