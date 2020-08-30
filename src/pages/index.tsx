import React, { FC, useState } from 'react';
import { css } from 'linaria';
import { MultiSelectArea, Picture } from '@src/components';
import { CONSTANTS } from '@src/utils/constants';

const Home: FC = () => {
  const { LOGO_ALT, SEARCH_FILTER } = CONSTANTS;
  const { LANGUAGES, LABELS } = SEARCH_FILTER;

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
          imageAlt={LOGO_ALT}
        />
      </div>
      <div>
        <MultiSelectArea
          value={selectedLanguages}
          onChange={handleLangSelectionChange}
          options={LANGUAGES}
          instanceId="languages"
          placeholder="Languages"
        />
        <MultiSelectArea
          value={selectedLabels}
          onChange={handlLabelSelectionChange}
          options={LABELS}
          instanceId="labels"
          placeholder="Labels"
        />
      </div>

      <div>
        <button>test</button>
        <button>test2</button>
      </div>
    </div>
  );
};

export default Home;
