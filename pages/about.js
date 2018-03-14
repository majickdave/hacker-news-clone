import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>
      <div>
       <h1 style={{"fontSize": "3em"}}>Hi my name is David Samuel,</h1>
         <p>and I am working on this clone of Hacker News because I love Hacker News.</p>
         <div >
         <a href="https://majickdave.github.io"><button style={{"border": "1px solid black", "backgroundColor": "white",
         "padding": "10px",
         "boxShadow": "3px 4px", "background": "#feff9c"}} >
           <h1>check out my website</h1>
         </button>
       </a>
     </div>
   </div>
       <style>
         @import url('https://fonts.googleapis.com/css?family=Permanent+Marker');
       </style>
       <style jsx>{`

         h1 {
           font-family: 'Permanent Marker', cursive;
         }

         p {
           font-size: 1.5em;
         }

         button {
           cursor: pointer;
           margin: 100px;
         }

         div {
           margin: auto;
           width: 50%
         }
       `}</style>
    </Layout>

)
