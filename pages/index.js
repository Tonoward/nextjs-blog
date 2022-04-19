import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className={utilStyles.headingXl}>Welcome</h1>
      <section className={utilStyles.headingMd}>
        <p>Hello, in this blog you can learn about the most recent topics in science.
          With relevant articles on the field and interesting excercises, this is the
          place to start developing your new ideas!
          {' '}
          asdfsadfsdf{' '}
          <a href="https://nextjs.org/learn">HERE</a></p>
        <p>
          This is just a test, hello hello
        </p>
      </section>


    </Layout>
  )
}