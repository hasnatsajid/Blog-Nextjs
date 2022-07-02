import Link from 'next/link';

const Blogs = ({ blogs }) => {
  return (
    <div className="categories">
      <h2>Blogs</h2>

      <div className="categories__wrapper">
        <div className="categories__list">
          {blogs &&
            blogs.map((element) => {
              return (
                <div key={element._id} className="categories__item">
                  <Link href={`/blogs/${element.slug}`}>
                    <a>
                      <div className="categories__card">{element.title}</div>
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

export default Blogs;

export async function getStaticPath() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps() {
  try {
    const response = await fetch(`${process.env.DOMAIN}/api/blogs`);
    const blogs = await response.json();

    return {
      props: {
        blogs,
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
