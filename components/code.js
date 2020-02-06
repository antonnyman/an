import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export default ({ className, language, height, children }) => (
  <SyntaxHighlighter
    className={className}
    language={language}
    children={children}
    style={github}
  />
)
