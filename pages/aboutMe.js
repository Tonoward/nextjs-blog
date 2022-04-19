import Layout from '../components/layout'
import Head from 'next/head'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'



export default function AboutMe() {
    return (
      <Layout>
        <Head>
          <title>About Me</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>About Me</h1>
          <div>Mi name is Antonio, I am currently developing some
            techasdkndfn askdmnosadnf asjkdnfsjdanf
            sadfjnsdajnf sadfjnsdjnf.
              </div> 
        </article>
      </Layout>
    )
  }

