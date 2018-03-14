import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import loadDB from '../lib/load-db'

const PostLink = (props) => (
  <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
  <div style={{"border": "1px solid grey", "padding": "20px", "width": "100%"}}>

        <p><a>{props.title}</a></p>

    <style jsx>{`

      div {
        margin-top: 50px;
        padding-top: 50px;
        box-shadow: 10px 10px 5px #aaaaaa;
        text-align: justify;
        font-family: 'Raleway', sans-serif;
        font-size: 1.8em;
      }


      div:hover {
        opacity: 0.6;
        cursor: pointer;
        color: red;
        background: #c3fdff;
        box-shadow: none;
        text-align: center;

      }

    `}</style>

  </div>
  </Link>
)

const Index = ({ stories }) => (
  <Layout>
    <h1 style={{"padding": "20px", "fontSize": "64px"}}>Hacker News Clone</h1>
    <div>
      {stories.map(story => (
        <PostLink
          key={story.id}
          id={story.id}
          title={story.title}
        />
      ))}
    </div>
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
