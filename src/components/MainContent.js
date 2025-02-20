import React, { useState, useMemo } from 'react';
import { useTable, useFilters } from 'react-table';

// 예시 데이터 (경로를 key로 한 객체 형태)
const data = {
  '/home': { path: '/home', name: 'Home', type: 'directory' },
  '/home/user': { path: '/home/user', name: 'User', type: 'directory' },
  '/home/user/documents': { path: '/home/user/documents', name: 'Documents', type: 'directory' },
  '/home/user/images': { path: '/home/user/images', name: 'Images', type: 'file' },
};

const Table = () => {
  const [filterInput, setFilterInput] = useState('');
  
  // 데이터를 배열로 변환
  const rowData = useMemo(() => Object.values(data), [data]);

  // 리액트 테이블을 설정
  const columns = useMemo(
    () => [
      {
        Header: 'Path',
        accessor: 'path', // 데이터의 path 값을 사용
      },
      {
        Header: 'Name',
        accessor: 'name', // 데이터의 name 값을 사용
      },
      {
        Header: 'Type',
        accessor: 'type', // 데이터의 type 값을 사용
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = useTable(
    {
      columns,
      data: rowData, // 배열 형식으로 변환된 데이터
      initialState: {
        filters: [], // 초기 필터 상태는 비워두기
      },
    },
    useFilters // 필터 기능 활성화
  );

  // 버튼 클릭 시 path와 type 필터를 동시에 적용
  const handleFilterChange = () => {
    // path나 type에 검색어가 포함되면 해당 항목을 필터링 (OR 조건)
    setFilter('path', (value) => value.includes(filterInput)); // path 필터링
    setFilter('type', (value) => value.includes(filterInput)); // type 필터링
  };

  return (
    <div>
      {/* 검색창과 버튼 - Path 및 Type 필터 */}
      <div>
        <input
          type="text"
          value={filterInput}
          onChange={(e) => setFilterInput(e.target.value)} // 입력값 상태 업데이트
          placeholder="Search by path or type"
        />
        <button onClick={handleFilterChange}>Filter</button>
      </div>

      {/* 테이블 출력 */}
      <table {...getTableProps()} border="1">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
