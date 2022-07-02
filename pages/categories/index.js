import Link from 'next/link';

const Categories = ({ categories }) => {
  return (
    <div className="categories">
      <h2>Categories</h2>

      <div className="categories__wrapper">
        <div className="categories__list">
          {categories &&
            categories.map((element) => {
              return (
                <div key={element._id} className="categories__item">
                  <Link href={`/categories/${element.slug}`}>
                    <a>
                      <div className="categories__card">{element.category}</div>
                    </a>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Categories;

export async function getStaticPath() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps() {
  try {
    const response = await fetch(`${process.env.DOMAIN}/api/categories`);
    const categories = await response.json();

    return {
      props: {
        categories,
        revalidate: 1,
      },
    };
  } catch (err) {
    console.log(err);

    return {
      props: {
        blogs: [],
      },
      revalidate: 1,
    };
  }
}
