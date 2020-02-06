const withCSS = require('@zeit/next-css')
const withMDX = require('@next/mdx')()

module.exports = withCSS(
  withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx']
  })
)
