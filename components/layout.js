import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react'

import Markdown from './markdown'

import '../public/static/tailwind.css'

const Layout = props => {
  const { children, meta } = props
  return (
    <div className='leading-none font-sans text-gray-800'>
      <Head>
        <title>{meta?.title ? `${meta.title}` : 'Bingo'}</title>
      </Head>
      <div className='max-w-xl mx-auto'>
        <MDXProvider components={Markdown}>{children}</MDXProvider>
      </div>
    </div>
  )
}
export default Layout
