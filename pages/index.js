import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import loadDB from '../lib/load-db'

const PostLink = (props) => (
  <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
  <div style={{"border": "1px solid grey", "padding": "20px", "boxShadow": "10px 10px 5px #aaaaaa"}}>

        <p><a>{props.title}</a></p>

    <style jsx>{`

      div {
        margin: 30px auto;
        padding-top: 50px;
      }

      a {
        font-family: "Lucida Console", Monaco, monospace;
        font-size: 150%;
      }

      div:hover {
        opacity: 0.6;
        cursor: pointer;
        color: green;
        -webkit-transform: scale(1.05, 1.1) 

      }

    `}</style>
  </div>
  </Link>
)

const Index = ({ stories }) => (
  <Layout>
    <h1 style={{"textAlign": "center"}}>Dave's NextJS HN Clone</h1>
    <div>
      {stories.map(story => (
        <PostLink
          key={story.id}
          id={story.id}
          title={story.title}
        />
      ))}
    </div>
    <style jsx>{`
      h1 {
        "Courier New", Courier, monospace;
      }

      div {
        padding-top: 50px;
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
