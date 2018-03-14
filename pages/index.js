import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import loadDB from '../lib/load-db'

const PostLink = (props) => (
  <ul>

    <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
      <a>
        <div className="article">
          <p style={{"fontSize": "3em"}}>
            {props.title}
          </p>
        </div>
      </a>
    </Link>
    <style jsx>{`

      .article {
        border: 1px solid lightgray;
        box-shadow: 5px 6px 10px lightgray;
        background: #eee;
        margin-top: 15px;
        padding-top: 25px;
        padding: 15px;
        max-width: 95%;
      }

      a {
        font-family: Helvetica, Arial, sans-serif;
        text-decoration: none;
        padding-top: 25px;
        padding-bottom: 25px;
        text-align: justify;

      }

      div:hover {
        background: #e0f2f1;
        opacity: 0.6;
        cursor: pointer;
        color: red;
        box-shadow: 5px 6px 10px #e0f2f1;
      }


    `}</style>
  </ul>
)

const Index = ({ stories }) => (
  <Layout>
    <h1 style={{"fontSize": "64px", "textAlign": "center"}}>Dave's Hacker News</h1>
    <div >
      {stories.map(story => (
        <PostLink
          key={story.id}
          id={story.id}
          title={story.title}
        />
      ))}
    </div>
    <style>
      @import url('https://fonts.googleapis.com/css?family=Permanent+Marker');
    </style>
    <style jsx>{`

      h1 {
        font-family: 'Permanent Marker', cursive;

      }

    `}</style>

  </Layout>
)

Index.getInitialProps = async () => {
  const db = await loadDB()

  const ids = await db.child('topstories').once('value')
  let stories = await Promise.all(
    ids.val().slice(0, 50).map(id => db
      .child('item')
      .child(id)
      .once('value')
    )
  )

  stories = stories.map(s => s.val())

  return { stories }
}

export default Index
