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
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  )
}

export default NextApp
