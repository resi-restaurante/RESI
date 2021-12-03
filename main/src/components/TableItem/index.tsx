/* eslint-disable no-plusplus */
import { ChangeEventHandler, HTMLAttributes } from 'react';

// import { Form } from '@unform/web';
// import { FormHandles } from '@unform/core';
// import { Input } from '..';

import { Container } from './styles';
// import { RadioGroup } from '../Radio';

interface TableProps extends HTMLAttributes<HTMLSpanElement> {
  chairs: number;
  numberTable: number;
  description: string;
  valueProp: string;
  checkedProp: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  selectedRadio: string;
}
export default function TableItem({
  chairs,
  numberTable,
  description,
  valueProp,
  checkedProp,
  onChange,
  selectedRadio,
}: TableProps) {
  const isRadioSelected = (value: string): boolean => selectedRadio === value;

  function getRow1() {
    const chair = [];
    for (let i = 0; i < Math.ceil(chairs / 2); i++) {
      chair.push(<span key={i} className="empty-table" />);
    }
    return chair;
  }

  function getRow2() {
    const chair2 = [];
    for (let i = 0; i < Math.floor(chairs / 2); i++) {
      chair2.push(<span key={i} className="empty-table" />);
    }
    return chair2;
  }
  // const formRef = useRef<FormHandles>(null);
  // function handleSubmit(data: string) {
  //   console.log(data);
  // }
  return (
    <Container>
      <div className="table ">
        <div className="table-row">
          <div>{getRow1()}</div>
        </div>
        <div className="table-row">
          <div>{getRow2()}</div>
        </div>
        <p className="table-name">{`MESA:${numberTable}`}</p>
        <p>{description}</p>
        {/* <Radio valueProp={table_id} /> */}
        {/* <Input type="radio" name="table" id="1" value="mesa" /> */}
        <div>
          <input
            type="radio"
            name="react-radio-btn"
            value={valueProp}
            checked={isRadioSelected(checkedProp)}
            onChange={onChange}
          />
          {/* {console.log(selectedRadio)} */}
        </div>
      </div>
    </Container>
  );
}
