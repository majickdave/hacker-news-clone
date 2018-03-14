import Layout from '../components/MyLayout.js'
import loadDB from '../lib/load-db'
import dateFormat from 'dateformat';

const Post = ({ item }) => (

  <Layout >
    <div className="article">
       <h1>{item.title}</h1>
       <p className="url"><a target="_blank" href={item.url}>{item.url}</a></p>
       <p>Posted on: {dateFormat(Date(item.time), "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
       <p>by: {item.by}</p>
       <p>score: {item.score}</p>
    </div>
     <style>
       @import url('https://fonts.googleapis.com/css?family=Permanent+Marker');
     </style>
     <style jsx>{`

       .article {
         border: none;
         background: #e0f2f1;
         max-width: 100%;
         padding: 15px;
         box-shadow: 5px 6px 10px lightgray;
       }

       p {
         font-family: Helvetica, Arial, sans-serif;
         text-decoration: none;
         padding-top: 25px;
         padding-bottom: 25px;

       }

       .url {
          text-align: center;
          padding-top: 100px;
          padding-bottom: 100px;
          font-size: 1.5em;
       }

       h1 {
         text-align: center;
         font-family: 'Permanent Marker', cursive;
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
