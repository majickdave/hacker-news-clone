const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const TextBox = (props) => (
  <div style={layoutStyle}>
      <p style={{"textAlign": "justify", "font-size": "3em"}}>{props.children}</p>
  </div>
)

export default TextBox
