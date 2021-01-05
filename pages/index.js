import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getAllPosts } from '../api/posts';

import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import DateComponent from '../components/date';

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

export default function Home({
  posts,
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>NextJS Nested demo</h2>
        <p>
          This is a sample website to demonstrate nested markdown structure
          rendered in next.js.
        </p>
        <p>
          The code for the website can be found at:{' '}
          <a
            href='https://github.com/xypnox/next-nested'
            target='_blank'
            rel='noopener noreferrer'
          >
            @xypnox/next-nested
          </a>
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Docs - Flat</h2>
        <p>
          The Docs can also be displayed in a flattened manner as well but have
          urls in same pattern as file structure. (These have not been sorted by
          date)
        </p>

        <ul className={utilStyles.list}>
          {posts.sort(
            (a, b) =>
              new Date(b.date).getTime() -
              new Date(a.date).getTime()
            ).map(({ date, title, slug }) => (
            <li className={utilStyles.listItem} key={slug}>
              <Link href={slug}>
                <a>{title}</a>
              </Link>
              <br />

              {date && (
                <small className={utilStyles.lightText}>
                  <DateComponent dateString={date} />
                </small>
              )}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
