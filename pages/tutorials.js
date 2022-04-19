import Layout from '../components/layout'
import Head from 'next/head'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'



export default function Tutorials() {
    return (
      <Layout>
        <Head>
          <title>Tutorials</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>Tutorials section</h1>
          <div>Here you can find some tutorials for lasdsadgfjj;asdng
              asdknfnsadf
              asdfsadgsgadkknsdagfk
              </div> 
        </article>
      </Layout>
    )
  }