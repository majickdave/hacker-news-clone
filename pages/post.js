import Layout from '../components/MyLayout.js'
import loadDB from '../lib/load-db'
import dateFormat from 'dateformat';

const Post = ({ item }) => (

  <Layout >
    <div className="article">
       <h1>{item.title}</h1>
       <p className="url"><a target="_blank" href={item.url}>{item.url}</a></p>
       <div className="notes">
         <p>Posted on: {dateFormat(Date(item.time), "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
         <p>by: {item.by}</p>
         <p>score: {item.score}</p>
       </div>
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
         background-image: url("https://res.cloudinary.com/mscmnd-com/image/upload/v1521055849/paper_kppvfv.jpg");
         opacity: 0.6
       }

       p {
         font-family: Helvetica, Arial, sans-serif;
         text-decoration: none;
         padding-top: 25px;
         padding-bottom: 25px;
         margin: auto;

       }

       .notes {
         width: 75%;
         margin: auto;
         bottom: 10;
         font-size: 3em;
       }

       .url {
          text-align: center;
          padding-top: 100px;
          padding-bottom: 90px;
          font-size: 1.5em;
          opacity: 1;
          font-size: 3em;
       }

       h1 {
         text-align: center;
         font-family: 'Permanent Marker', cursive;
         font-size: 500%;
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
