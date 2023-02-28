import classNames from 'classnames';
import { nanoid } from 'nanoid';
import React from 'react';
import styles from './table.module.scss';

interface TableProps {
  data: {
    [key: string]: any;
  }[];
  columns: {
    label: string;
    key: string;
  }[];
  rowClickHandler: (arg0: any) => void;
  clickableRow?: boolean;
}

export function Table({
  data,
  columns,
  rowClickHandler,
  clickableRow,
}: TableProps) {
  if (!data.length) {
    return null;
  }

  const rowStyles = classNames({
    [styles.clickableRow]: clickableRow,
  });

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            className={rowStyles}
            onClick={() => {
              rowClickHandler(row);
            }}
            key={nanoid()}
          >
            {columns.map((column) => (
              <td key={column.key}>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
