import { FC } from 'react';
import Select, {
  ActionMeta,
  GroupedOptionsType,
  OptionsType,
} from 'react-select';

type OnChange = ((value: any, actionMeta: ActionMeta<any>) => void) &
  ((value: any, action: ActionMeta<any>) => void);
type Props = {
  instanceId: string;
  onChange: OnChange;
  options: OptionsType<any> | GroupedOptionsType<any>;
  placeholder: string;
  value?: unknown;
};

const MultiSelect: FC<Props> = (props) => {
  const { instanceId, onChange, options, placeholder, value } = props;

  return (
    <Select
      value={value}
      onChange={onChange}
      options={options}
      instanceId={instanceId}
      placeholder={placeholder}
      isMulti={true}
    />
  );
};

export default MultiSelect;
export type { Props as MultiSeletProps };
