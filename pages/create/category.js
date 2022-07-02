import { useState } from 'react';
import jwt from 'jsonwebtoken';

const CreateCategory = () => {
  const [category, setCategory] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(category);
    await fetch(`${process.env.DOMAIN}/api/create/category`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ category }),
    });

    setCategory('');
  };

  return (
    <div className="createCategory">
      <form className="category" onSubmit={submitHandler}>
        <div className="category__input">
          <label htmlFor="category">Category</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <button className="category__publish">Publish</button>
      </form>
    </div>
  );
};

export default CreateCategory;
