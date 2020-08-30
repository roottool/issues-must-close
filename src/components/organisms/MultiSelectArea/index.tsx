import { FC } from 'react';
import { MultiSelect, MultiSeletProps } from '@src/components';

const MultiSelectArea: FC<MultiSeletProps> = (props) => {
  const { instanceId, onChange, options, placeholder, value } = props;

  return (
    <div>
      <label htmlFor={instanceId}>{placeholder}</label>
      <MultiSelect
        value={value}
        onChange={onChange}
        options={options}
        instanceId={instanceId}
        placeholder={placeholder}
      />
    </div>
  );
};

export default MultiSelectArea;
