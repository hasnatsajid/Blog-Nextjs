import Layout from '../components/Layout';
import { SessionProvider } from 'next-auth/react';

import '../styles/index.scss';
import '../styles/createCategory.scss';
import '../styles/header.scss';
import '../styles/blogPost.scss';
import '../styles/categories.scss';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>{' '}
    </SessionProvider>
  );
}

export default MyApp;
