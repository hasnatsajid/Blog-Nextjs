import { connectToDatabase } from '../../../utils/database';

export default async function createCategory(req, res) {
  const { category } = req.body;
  const { method } = req;

  if (method === 'POST') {
    if (!category) {
      res.status(400).json({ message: 'Category name must be provided' });
    }

    const slug = category.toLowerCase().replace(' ', '-');

    const { db } = await connectToDatabase();

    await db.collection('categories').insertOne({
      category,
      slug,
    });

    res.status(200).end('Category Added');

    return;
  }

  res.status(404).json({ error: 'Invalid request' });
}
