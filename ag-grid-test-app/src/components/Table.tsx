import { AgGridReact } from 'ag-grid-react';
import { useMemo } from 'react';
import type { ColDef } from 'ag-grid-community';
import { mockUserData } from '../state/MockData';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import type { UserRecord } from '../state/MockData';

export const Table = () => {

    const columnDefs = useMemo<ColDef<UserRecord>[]>(() => [
        { headerName: 'ID', field: 'id', sortable: true, filter: true },
        { headerName: 'Name', field: 'name', sortable: true, filter: true },
        { headerName: 'Email', field: 'email', sortable: true, filter: true },
        { headerName: 'Age', field: 'age', sortable: true, filter: true },
        { headerName: 'Country', field: 'country', sortable: true, filter: true },
    ], []);
    console.log('mockUserData:', mockUserData);
    console.log('columnDefs:', columnDefs);
    return (
        <div className="ag-theme-alpine" style={{ height: '100%', width: '100%' }}>
            <AgGridReact<UserRecord>
                rowData={mockUserData}
                columnDefs={columnDefs}
                pagination={true}
                paginationPageSize={25}
            />
        </div>
    );
};