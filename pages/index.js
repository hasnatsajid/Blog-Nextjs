import Head from 'next/head';
import Header from '../components/Header/Header';

import useSwr from 'swr';
import BlogItem from '../components/BlogItem/BlogItem';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  // const { data, error } = useSwr('/api/blogs', fetcher);

  // if (error) return <p>Failed to load users</p>;

  // if (!data) return <p>Loading...</p>;

  // console.log(data[0]);

  return (
    <div>
      <Head>
        <title>The Best blog in the world is Hassuu</title>
        <meta name="description" content="The Best learning platform in the world" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* {data && data.map((blog) => <BlogItem key={blog.id} data={data} />)} */}
    </div>
  );
}
