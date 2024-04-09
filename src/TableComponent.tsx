import React, { useState } from 'react';

type row = {
    column_a: string,
    column_b: string
}

const emptyRow: row = {column_a: '', column_b: ''};

type Table = row[]; 

export const TableComponent: React.FC<{rows?: row[]}> = ({ rows = [emptyRow] }) => {
    const [tableState, setTableState] = useState<Table>(rows);
    const [currentRow, setCurrentRow] = useState<row>(emptyRow);

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>, col: string) => {
        setCurrentRow({...currentRow, [col]: e.target.value});    
    };
    
    const newRow = () => {
        setTableState(
            [...tableState, currentRow]
            );
        setCurrentRow(emptyRow);
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Column A</th>
                        <th>Column B</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                    {tableState.map((r, index) => (
                        <tr key={index}>
                            <td>{r.column_a}</td>
                            <td>{r.column_b}</td>
                        </tr>
                    ))}
                    <tr>
                        <td>
                            <input type="text" value={currentRow.column_a || ''} onChange={(e) => inputHandler(e, 'column_a')} />
                        </td>
                        <td>
                            <input type="text" value={currentRow.column_b || ''} onChange={(e) => inputHandler(e, 'column_b')} />
                        </td>
                        <td>
                            <button onClick={newRow}>Add</button>
                        </td>
                    </tr>
                <tbody>
                </tbody>
            </table> 
        </div>       
    );
} 
