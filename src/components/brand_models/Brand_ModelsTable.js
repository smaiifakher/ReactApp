import MaterialTable from 'material-table';
import React, {useEffect, useState} from 'react';
import tableIcons from '../templates/TableIcons';
import getColumns from './Brand_ModelsColumns';
import Edit from "@material-ui/icons/Edit";
import {Switch} from "@material-ui/core";
import {withRouter} from "react-router";
import {AddBox} from "@material-ui/icons";
import {deleteBrand_Models, getBrand_Models} from "../../repo/brand_modelsRepo";
import {Loading} from "../templates/Loading";
/*
Documentation on developing the Material-Table can be found at https://material-table.com/
*/

const Brand_ModelsTable = (props) => {
  const history = props.history;
  const [columns, setColumns] = useState(getColumns({}));
  const [loading, setLoading] = useState(false);
  //Here we call delete
  const handleRowDelete = (oldData, resolve) => {
    setLoading(true);
    deleteBrand_Models(oldData.id)
      .then(res => {
        resolve();
        setLoading(false);
      })
      .catch(error => {
        resolve();
        setLoading(false);
      })
  }


  return (<div>
    <MaterialTable
      minRows={20}
      title="Brand_Models Data"
      columns={columns}
      data={async (query) => {
        setLoading(true);
        const res = await getBrand_Models(query.page, query.pageSize, query.search);
        setLoading(false);
        return ({
          data: res.data, page: query.page, totalCount: parseInt(res.total)
        })
      }}
      options={{
        sorting: true, actionsColumnIndex: -1, pageSize: 20, toolbar: true, paging: true
      }}

      actions={[{
        icon: () => <Edit/>, tooltip: 'Edit', onClick: (event, rowData) => {
          history.push({
            pathname: `/brand_models/update/${rowData.id}`, user: rowData
          })
        }
      }, {
        icon: () => <AddBox variant="contained" color="secondary"/>, tooltip: 'Add New', // This makes add button to appear in table toolbar instead for each row
        isFreeAction: true, onClick: (event, rowData) => {
          history.push("/brand_models/add")
        }
      }]}

      icons={tableIcons}
      editable={{
        onRowDelete: (oldData) => new Promise((resolve) => {
          handleRowDelete(oldData, resolve)
        }),
      }}

    />
  </div>);
}
export default withRouter(Brand_ModelsTable);
