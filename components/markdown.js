import Link from 'next/link'

import Code from './code'

function kebabCase(str) {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .join('-')
    .toLowerCase()
}

export default {
  h1: props => (
    <h1
      id={kebabCase(props.children)}
      className='text-3xl font-bold'
      {...props}
    />
  ),
  h2: props => {
    return props.className ? (
      <h2 {...props} />
    ) : (
      <h2
        id={kebabCase(props.children)}
        className='text-2xl font-bold'
        {...props}
      />
    )
  },
  h3: props => (
    <h3
      id={kebabCase(props.children)}
      className='text-xl font-bold'
      {...props}
    />
  ),
  p: props => <p className='my-6' {...props} />,
  ol: props => <ol className='pl-8 list-decimal' {...props} />,
  ul: props => <ul className='pl-8 list-disc' {...props} />,
  li: props => <li className='my-1' {...props} />,
  strong: props => <strong className='font-bold text-gray-700' {...props} />,
  a: props => {
    return props.className ? (
      <a {...props} />
    ) : props.href.startsWith('/') ? (
      <Link href={props.href}>
        <a
          className='text-black hover:underline font-medium'
          children={props.children}
        />
      </Link>
    ) : (
      <a
        className='text-blue-700 hover:underline font-medium'
        children={props.children}
      />
    )
  },
  pre: ({ children }) => children,
  code: ({ className, children }) => (
    <Code
      className='my-8 p-6 text-sm leading-normal rounded'
      language={className.replace('language-', '')}
      children={children}
    />
  ),
  inlineCode: props => (
    <code
      className='font-mono text-sm bg-gray-200 rounded p-1 whitespace-no-wrap'
      {...props}
    />
  )
}
