import React, { FC, useState } from 'react';
import Select from 'react-select';
import { css } from 'linaria';
import Picture from '@src/components/Picture/picture';
import { CONSTANTS } from '@src/utils/constants';

const Home: FC = () => {
  const { LANGUAGES, LABELS } = CONSTANTS.SEARCH_FILTER;

  const [selectedLanguages, setLangages] = useState<string[]>([]);
  const handleLangSelectionChange = (value: string[]) => {
    setLangages(value);
  };
  const [selectedLabels, setLabels] = useState<string[]>([]);
  const handlLabelSelectionChange = (value: string[]) => {
    setLabels(value);
  };

  return (
    <div>
      <div>
        <Picture
          webpPath={require('@public/images/big_logo.webp')}
          imagePath={require('@public/images/big_logo.png')}
          imageAlt="logo"
        />
      </div>
      <div>
        <div>
          <label htmlFor="languages">Languages</label>
          <Select
            value={selectedLanguages}
            onChange={handleLangSelectionChange}
            options={LANGUAGES}
            instanceId="languages"
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
            instanceId="labels"
            placeholder="Labels"
            isMulti={true}
          />
        </div>
      </div>

      <div>
        <button>test</button>
        <button>test2</button>
      </div>
    </div>
  );
};

export default Home;
