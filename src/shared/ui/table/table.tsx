import { nanoid } from 'nanoid';
import React from 'react';

interface TableProps {
  data: {
    [key: string]: any;
  }[];
  columns: {
    label: string;
    key: string;
  }[];
  rowClickHandler: (arg0: any) => void;
}

export function Table({ data, columns, rowClickHandler }: TableProps) {
  if (!data.length) {
    return null;
  }

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
