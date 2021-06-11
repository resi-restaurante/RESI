import Select from 'react-select';

const options = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
];

function SelectInput() {
  return (
    <Select
      options={options}
      placeholder="Quantidade de pessoas"
      theme={theme => ({
        ...theme,
        borderRadius: 3,
        colors: {
          ...theme.colors,
          primary25: '#ff6865',
          primary: '#e53935',
        },
      })}
    />
  );
}
export default SelectInput;
