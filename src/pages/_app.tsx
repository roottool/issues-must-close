import { FC } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { css } from 'linaria';
import { CONSTANTS } from '@src/utils/constants';
import { CONSTANTS as STYLE_CONSTANTS } from '@src/styles/constants';

const NextApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { DESCRIPTION, LOGO_ALT, SITE_TITLE } = CONSTANTS;

  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:type" content="website" />
        {/* TODO: Create the url */}
        <meta property="og:url" content="" />
        <meta name="description" content={DESCRIPTION} />
        <meta
          property="og:image"
          content={require('@public/images/logo.png')}
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta
          name="twitter:image"
          content={require('@public/images/logo.png')}
        />
        <meta name="twitter:image:alt" content={LOGO_ALT} />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

const globals = css`
  :global() {
    html,
    body {
      height: 100vh;
      width: 100vw;
    }

    html {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: ${STYLE_CONSTANTS.fontFamily};
      font-size: 20px;
      line-height: 1.42857;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
  }
`;

export default NextApp;
export { globals };
