import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './DataGrid.css'; // 스타일을 별도의 CSS 파일로 분리

const DataGrid = () => {
  const location = useLocation(); // 현재 경로
  const currentPath = location.pathname; // 경로에 따라 데이터와 컬럼 변경

  const [data, setData] = useState([]);
  const [columnsToDisplay, setColumnsToDisplay] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [filterText, setFilterText] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 경로에 맞는 API URL과 컬럼 정의
  const apiUrls = {
    '/ProductGroup': 'https://localhost:7204/api/ProductGroup',
    '/ItemMaster': 'https://localhost:7204/api/ItemMaster',
    '/Factory': 'https://localhost:7204/api/Factory',
    '/Line': 'https://localhost:7204/api/Line',
    '/Process': 'https://localhost:7204/api/Process',
    '/Equipment': 'https://localhost:7204/api/Equipment',
    '/Mold': 'https://localhost:7204/api/Mold',
  };

  const columns = {
    '/ProductGroup': {
      columns: ['NO', '활동', '제품군코드', '제품군명', '사업부', '설명'],
      fieldNames: ['no', 'activity', 'productGroupCode', 'productGroupName', 'departmentName', 'description'],
    },
    '/ItemMaster': {
      columns: ['NO', '활동', '이미지', '품목코드', '품목명', '제품군코드', '제품군명', '품목분류', 'Eo No.', 'Eo 날짜', '고객사', '소재', '크기(너비*길이*높이)', '중량(kg)', '설명'],
      fieldNames: ['no', 'activity', 'imageUrl', 'itemCode', 'itemName', 'productGroupCode', 'productGroupName', 'itemClassificationName', 'eoNumber', 'eoDate', 'customer', 'material', 'dimensions', 'weightKg', 'description'],
    },
    '/Factory': {
      columns: ['NO', '활동', '공장코드', '공장명', '사업부', '설명'],
      fieldNames: ['no', 'activity', 'factoryCode', 'factoryName', 'departmentName', 'description'],
    },
    '/Line': {
      columns: ['NO', '활동', '라인코드', '라인명', '공장명', '설명'],
      fieldNames: ['no', 'activity', 'lineCode', 'lineName', 'factoryName', 'description'],
    },
    '/Process': {
      columns: ['NO', '활동', '공정코드', '공정명', '사업부', '설명'],
      fieldNames: ['no', 'activity', 'processCode', 'processName', 'departmentName', 'description'],
    },
    '/Equipment': {
      columns: ['NO', '활동', '이미지', '설비종류', '설비코드', '설비명', '공장명', '제작사', '공급사', '모델번호', '설치일', '설명'],
      fieldNames: ['no', 'activity', 'imageUrl', 'equipmentType', 'equipmentCode', 'equipmentName', 'factoryName', 'manufacturer', 'supplier', 'modelNumber', 'installationDate', 'description'],
    },
    '/Mold': {
      columns: ['NO', '활동', '이미지', '금형 및 공구코드', '금형 및 공구명', '금형 및 공구호수', '공장명', '관리부서', '설명'],
      fieldNames: ['no', 'activity', 'imageUrl', 'moldtoolCode', 'moldtoolName', 'moldtoolNumber', 'factoryName', 'managementDepartment', 'description'],
    },
  };
  

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(apiUrls[currentPath]);
        if (!response.ok) {
          throw new Error('데이터를 불러오는 데 실패했습니다');
        }

        const result = await response.json();
        setData(result);
        setColumnsToDisplay(columns[currentPath] || []);
        setPageIndex(0);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPath]);

  const filteredData = data.filter(item =>
    Object.values(item).some(value =>
      value.toString().toLowerCase().includes(filterText.toLowerCase())
    )
  );

  const paginatedData = filteredData.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);

  const goToNextPage = () => {
    if ((pageIndex + 1) * pageSize < filteredData.length) {
      setPageIndex(pageIndex + 1);
    }
  };

  const goToPrevPage = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  };

  const handlePageSizeChange = (event) => {
    setPageSize(Number(event.target.value));
    setPageIndex(0);
  };

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
    setPageIndex(0);
  };

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>오류 발생: {error}</div>;

  return (
    <div className="data-grid-container">
      <div className="filter-container">
        <input
          type="text"
          className="filter-input"
          placeholder="검색..."
          value={filterText}
          onChange={handleFilterChange}
        />
        <select onChange={handlePageSizeChange} value={pageSize} className="page-size-dropdown">
          <option value={5}>5개</option>
          <option value={10}>10개</option>
          <option value={15}>15개</option>
          <option value={20}>20개</option>
        </select>
      </div>

      <table className="data-table">
  <thead>
    <tr>
      {columnsToDisplay.columns?.map((column, index) => (
        <th key={index}>{column}</th>
      ))}
    </tr>
  </thead>
  <tbody>
    {paginatedData.map((row, index) => (
      <tr key={index}>
        {columnsToDisplay.fieldNames?.map((field, idx) => {
          const value = row[field] ?? '-'; // NULL 값이면 '-' 표시
          return <td key={idx}>{value}</td>;
        })}
      </tr>
    ))}
  </tbody>
</table>


      <div className="pagination-controls">
        <button onClick={goToPrevPage} disabled={pageIndex === 0} className="pagination-button">이전</button>
        <button onClick={goToNextPage} disabled={(pageIndex + 1) * pageSize >= filteredData.length} className="pagination-button">다음</button>
      </div>
    </div>
  );
};

export default DataGrid;
