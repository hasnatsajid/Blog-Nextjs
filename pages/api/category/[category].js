import { connectToDatabase } from '../../../utils/database';

export default async function categoryPosts(req, res) {
  // Get data from database
  const { category } = req.query;

  console.log(category);

  const { method } = req;

  if (method === 'GET') {
    const { db } = await connectToDatabase();

    let blogs = await db.collection('blogs').find().toArray();

    blogs = blogs.filter((blog) => blog.category.toLowerCase() == category);

    res.status(200).json(blogs);

    return;
  }

  res.status(404).json({ error: 'Invalid request' });
}
