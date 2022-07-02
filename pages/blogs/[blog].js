const Blog = ({ blogData }) => {
  const blog = blogData[0];

  const newDate = new Date(blog.date).toDateString();

  return (
    <div className="blogPost">
      <div className="blog">
        <div className="blog__featuredImage">
          <img src={blog.image} alt={blog.title} />
        </div>
        <div className="blog__info">
          <h1 className="blog__title">{blog.title}</h1>
          <div className="blog__created">
            <span>
              Created at <i>{newDate}</i> by <b>{blog.author}</b>
            </span>
          </div>
        </div>

        <div className="blog__description">{blog.description}</div>

        <div className="blog__tags">
          <div className="blog__tags_head">#Tags</div>
          <div>{blog.tags.length > 1 && blog.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </div>
      </div>
    </div>
  );
};
export default Blog;

export async function getStaticPaths() {
  const response = await fetch(`${process.env.DOMAIN}/api/blogs`);
  const blogs = await response.json();

  const paths = blogs.map((blog) => ({
    params: {
      blog: blog.slug,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const blog = context.params.blog;

  const res = await fetch(`${process.env.DOMAIN}/api/blog/${blog}`);
  const blogData = await res.json();

  return { props: { blogData } };
}
