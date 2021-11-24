/* eslint-disable no-plusplus */

import { HTMLAttributes } from 'react';
import { Checkbox } from 'semantic-ui-react';

import { Container } from './styles';

interface TableProps extends HTMLAttributes<HTMLSpanElement> {
  chairs: number;
  numberTable: number;
  description: string;
}
export default function TableItem({
  chairs,
  numberTable,
  description,
}: TableProps) {
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
  return (
    <Container>
      <div className="table">
        <div className="table-row">
          <div>{getRow1()}</div>
        </div>
        <div className="table-row">
          <div>{getRow2()}</div>
        </div>
        <p className="table-name">{`MESA:${numberTable}`}</p>
        <p>{description}</p>
        <Checkbox />
      </div>
    </Container>
  );
}
