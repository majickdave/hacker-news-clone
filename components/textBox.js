const layoutStyle = {
  border: '1px solid #DDD'
}

const TextBox = (props) => (
  <div style={layoutStyle}>
      <p style={{"textAlign": "justify", "font-size": "3em"}}>{props.children}</p>
  </div>
)

export default TextBox
