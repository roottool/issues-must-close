import { FC } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core'

import CONSTANTS from '../constants'

const globalStyle = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`

const NextApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { SITE_TITLE } = CONSTANTS

  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:type" content="website" />
        {/* TODO: Create the url */}
        <meta property="og:url" content="" />
        {/* TODO: Create the description */}
        <meta name="description" content="" />
        {/* TODO: Create the keywords */}
        <meta name="keywords" content="" />
        <meta property="og:image" content={require('../../public/images/logo.png')} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content="Description of this content." />
        <meta name="twitter:image" content={require('../../public/images/logo.png')} />
        <meta name="twitter:image:alt" content="logo" />
      </Head>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  )
}

export default NextApp
