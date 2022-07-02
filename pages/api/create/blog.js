import { connectToDatabase } from '../../../utils/database';
import { MongoClient } from 'mongodb';

export default async function createBlog(req, res) {
  const { title, author, image, description, category, tags } = req.body;
  const { method } = req;

  if (method === 'POST') {
    if (!title) {
      res.status(400).json({ message: 'Blog title must be provided' });
    }

    if (!author) {
      res.status(400).json({ message: 'Blog title must be provided' });
    }
    if (!image) {
      res.status(400).json({ message: 'Blog title must be provided' });
    }
    if (!description) {
      res.status(400).json({ message: 'Blog title must be provided' });
    }
    if (!category) {
      res.status(400).json({ message: 'Blog title must be provided' });
    }
    if (!tags) {
      res.status(400).json({ message: 'Blog title must be provided' });
    }

    const date = new Date();
    const slug = title.toLowerCase().replace(/ /g, '-');

    const { db } = await connectToDatabase();

    await db.collection('blogs').insertOne({
      date,
      title,
      author,
      image,
      description,
      category,
      tags,
      likes: 0,
      slug,
    });

    res.status(200).end('Blog has been added');

    return;
  }

  res.status(404).json({ error: 'Invalid request' });
}

// export async function getServerSideProps() {
//   const { db } = await connectToDatabase();
//   if (db) return { isConnected: true };
// }
