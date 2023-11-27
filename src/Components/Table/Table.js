import React, { useEffect, useState } from "react";
import { useFetcher, useNavigate } from 'react-router-dom';
import './Table.css';
import DataTable from 'react-data-table-component';
import { columns } from "../../Contents/SearchFormFieldJson";
import { getTableData } from "../CommonFunction/CommonFunction";
import Loader from "../Loader/Loader";

const Table = (props) => {
  const { searchedData } = props;
  const Navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoader, setIsLoader] = useState(true);


  const groupDetail = (data) => {
    Navigate("/groupRecords", { state: { key: data.groupId } });
  }

  useEffect(() => {
    setIsLoader(true);
    const tableData = getTableData(searchedData);
    setData(tableData);
    setTimeout(() => {
      setIsLoader(false)
    }, 500);
    
  }, [searchedData])

  return (
    <div>

      {isLoader && <Loader />}
      <DataTable
        columns={columns}
        data={data && data}
        fixedHeader={true}
        pointerOnHover={true}
        onRowClicked={groupDetail}
        striped={true}
        responsive={true}
      />

    </div>
  )
}

export default Table;