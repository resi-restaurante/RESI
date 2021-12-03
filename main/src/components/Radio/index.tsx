import { ChangeEventHandler } from 'react';

interface Props {
  checkedProp: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  selectedRadio: string;
}
export default function Radio({ checkedProp, onChange, selectedRadio }: Props) {
  // const [selectedRadio, setSelectedRadio] = useState('');
  const isRadioSelected = (value: string): boolean => selectedRadio === value;
  // const handleRadioClick = (e: ChangeEvent<HTMLInputElement>): void =>
  //   setSelectedRadio(e.currentTarget.value);

  return (
    <div>
      <input
        type="radio"
        name="react-radio-btn"
        checked={isRadioSelected(checkedProp)}
        onChange={onChange}
      />
      {/* {console.log(selectedRadio)} */}
    </div>
  );
}

// import { ChangeEventHandler } from 'react';

// interface PropsRadio {
//   value: boolean;
//   onChange: ChangeEventHandler<HTMLInputElement>;
// }
// const Radio = ({ value, onChange }: PropsRadio) => {
//   return <input type="radio" checked={value} onChange={onChange} />;
// };
// export default Radio;
