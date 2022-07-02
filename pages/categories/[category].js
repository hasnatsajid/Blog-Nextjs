import { useRouter } from 'next/router';

const Category = () => {
  const router = useRouter();
  const { category } = router.query;
  return <div className="category">{category}</div>;
};

export default Category;

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(`${process.env.DOMAIN}/api/categories`);
  const blogs = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = blogs.map((post) => ({
    params: { category: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const slug = context.params.category;
  try {
    const response = await fetch(`${process.env.DOMAIN}/api/category/${slug}`);
    const data = await response.json();

    return {
      props: {
        blogs: data,
        revalidate: 1,
      },
    };
  } catch (err) {
    return {
      props: { blogs: [], revalidate: 1 },
    };
  }
}
