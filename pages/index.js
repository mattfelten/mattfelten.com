import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

import utilStyles from '../styles/utils.module.css';
//import { getSortedPostsData } from '../lib/posts';
//import { getFolderNestedData } from '../lib/docs';
import { getSortedFlatData } from '../lib/docs';
import Link from 'next/link';
import DateFormatter from '../components/date';

export async function getStaticProps() {
  const allDocsFlatData = await getSortedFlatData('docs');

  return {
    props: {
      allDocsFlatData,
    },
  };
}

export default function Home({
  allDocsFlatData,
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
          {allDocsFlatData.sort(
            (a, b) =>
              new Date(b.date).getTime() -
              new Date(a.date).getTime()
            ).map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/docs/${id}`}>
                <a>{title}</a>
              </Link>
              <br />

              {date && (
                <small className={utilStyles.lightText}>
                  <DateFormatter dateString={date} />
                </small>
              )}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
