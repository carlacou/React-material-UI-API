import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'

// 1.colums: Table header
// 2.rows: Table body

const cols = [
  { field: "name", headerName: "name", width: 200 },
  { field: "email", headerName: "email", width: 200 },
  { field: "phone", headerName: "phone", width: 200 },
  { field: "company", headerName: "company", width: 200 },
  { field: "website", headerName: "website", width: 200 },

];

const DataGridMUI = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  //trim the data and grab what we want

  const rowData = users?.map(user => {
    return {
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      id: user?.id,
      website: user?.website,
      phone: user?.phone,
      company: user?.company?.name,
    };
  });

  console.log(rowData);
  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        checkboxSelection
        autoHeight
        pageSize={5}
        rows={rowData}
        columns={cols}
        arial-label="student table"
      />
    </div>
  );
};

export default DataGridMUI;



/* --------------------- Modelo da Documentação -----------------------*/ 
// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 90 },
//   {
//     field: 'firstName',
//     headerName: 'First name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'lastName',
//     headerName: 'Last name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// export default function DataGridDemo() {
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//         disableSelectionOnClick
//       />
//     </div>
//   );
// }


