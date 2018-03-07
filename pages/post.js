import Layout from '../components/MyLayout.js'
import loadDB from '../lib/load-db'

const Post = ({ item }) => (
  <Layout>
     <h1>{item.title}</h1>
     <p>URL: <a target="_blank" href={item.url}>{item.url}</a></p>
     <p>Posted on: {Date(item.time)}</p>
     <p>by: {item.by}</p>
     <p>score: {item.score}</p>
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
