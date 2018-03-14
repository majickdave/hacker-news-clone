import Header from './Header'

const layoutStyle = {
  margin: 5,
  padding: 20,
  border: '0'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout
