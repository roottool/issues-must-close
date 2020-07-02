import React, { FC, useState } from 'react'
import Select from 'react-select'

import Picture from '../components/Picture/picture'
import CONSTANTS from '../constants'

const Home: FC = () => {
  const { LANGUAGES, LABELS } = CONSTANTS.SEARCH_FILTER

  const [selectedLanguages, setLangages] = useState<string[]>([])
  const handleLangSelectionChange = (value) => {
    setLangages(value)
  }
  const [selectedLabels, setLabels] = useState<string[]>([])
  const handlLabelSelectionChange = (value) => {
    setLabels(value)
  }

  return (
    <div className="container">
      <main>
        <Picture
          webpPath={require('../../public/images/big_logo.webp')}
          imagePath={require('../../public/images/big_logo.png')}
          imageAlt="logo"
        />

        <div>
          <div>
            <label htmlFor="languages">Languages</label>
            <Select
              value={selectedLanguages}
              onChange={handleLangSelectionChange}
              options={LANGUAGES}
              id="languages"
              placeholder="Languages"
              isMulti={true}
            />
          </div>
          <div>
            <label htmlFor="labels">Labels</label>
            <Select
              value={selectedLabels}
              onChange={handlLabelSelectionChange}
              options={LABELS}
              id="labels"
              placeholder="Labels"
              isMulti={true}
            />
          </div>
        </div>

        <div>
          <button>test</button>
          <button>test2</button>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
      {/*
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style> */}
      {/* 
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style> */}
    </div>
  )
}

export default Home
