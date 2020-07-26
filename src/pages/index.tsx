import React, { FC, useState } from 'react';
import Select from 'react-select';

import PageDefinition from '../components/PageDefinition';
import Picture from '../components/Picture/picture';
import CONSTANTS from '../constants';

const Home: FC = () => {
  const { LANGUAGES, LABELS } = CONSTANTS.SEARCH_FILTER;

  const [selectedLanguages, setLangages] = useState<string[]>([]);
  const handleLangSelectionChange = (value) => {
    setLangages(value);
  };
  const [selectedLabels, setLabels] = useState<string[]>([]);
  const handlLabelSelectionChange = (value) => {
    setLabels(value);
  };

  return (
    <PageDefinition>
      <Picture imageName={'big_logo.png'} imageAlt="logo" />

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
    </PageDefinition>
  );
};

export default Home;
