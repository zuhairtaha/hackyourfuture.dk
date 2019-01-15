import Head from 'next/head'
import marked from 'marked'
import Layout from '../components/layouts/layout'
import Content from '../components/layouts/content'
import Contactform from '../components/contact-form/index'
import Team from '../components/team'
import { content, title } from '../components/content/_mentors'

export default () => (
  <Layout>
    <Head>
      <title>{title}</title>
    </Head>
    <Content>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
      <img alt='' src={'https://i.imgur.com/jspZFfk.jpg'} />

      <h2 id='becoming-mentor'>Would you like to help?</h2>
      <Contactform />
    </Content>
    <h2 id='mentors' style={{ textAlign: 'center' }}>
      The team
    </h2>
    <Team />
  </Layout>
)
