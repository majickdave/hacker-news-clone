import Layout from '../components/MyLayout.js'
import loadDB from '../lib/load-db'
import dateFormat from 'dateformat';

const Post = ({ item }) => (
  <Layout>
     <h1>{item.title}</h1>
     <p>URL: <a target="_blank" href={item.url}>{item.url}</a></p>
     <p>Posted on: {dateFormat(Date(item.time), "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
     <p>by: {item.by}</p>
     <p>score: {item.score}</p>
     <style jsx>{`

       p {
         padding-top: 50px;
         font-family: "Lucida Console", Monaco, monospace;
         text-decoration: none;
         font-size: 150%;

       }

       a:hover {
         opacity: 0.6;
         cursor: pointer;
         color: red;

       }

     `}</style>
  </Layout>
)

Post.getInitialProps = async ({ query }) => {
  console.log('XXX', query.id)
  const db = await loadDB()
  let item = await db.child('item').child(query.id).once('value')
  item = item.val()

  return { item }
}

export default Post
