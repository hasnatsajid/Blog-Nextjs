import { connectToDatabase } from '../../../utils/database';

export default async function categoryPosts(req, res) {
  // Get data from database
  const { slug } = req.query;

  console.log(slug);

  const { method } = req;

  if (method === 'GET') {
    const { db } = await connectToDatabase();

    const blogs = await db.collection('blogs').find().toArray();

    const blog = blogs.filter((blog) => blog.slug === slug);

    res.status(200).json(blog);

    return;
  }

  res.status(404).json({ error: 'Invalid request' });
}
