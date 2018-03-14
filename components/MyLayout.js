import Header from './Header'

const layoutStyle = {
  margin: 0,
  padding: 0,
  border: '0'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout
