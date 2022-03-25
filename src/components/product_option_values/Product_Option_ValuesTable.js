import MaterialTable from 'material-table';
import React, {useEffect, useState} from 'react';
import tableIcons from '../templates/TableIcons';
import getColumns from './Product_Option_ValuesColumns';
import Edit from "@material-ui/icons/Edit";
import {Switch} from "@material-ui/core";
import {withRouter} from "react-router";
import {AddBox} from "@material-ui/icons";
import {deleteProduct_Option_Values, getProduct_Option_Values} from "../../repo/product_option_valuesRepo";
import {Loading} from "../templates/Loading";
/*
Documentation on developing the Material-Table can be found at https://material-table.com/
*/

const Product_Option_ValuesTable = (props) => {
  const history = props.history;
  const [columns, setColumns] = useState(getColumns({}));
  const [loading, setLoading] = useState(false);
  //Here we call delete
  const handleRowDelete = (oldData, resolve) => {
    setLoading(true);
    deleteProduct_Option_Values(oldData.id)
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
      title="Product_Option_Values Data"
      columns={columns}
      data={async (query) => {
        setLoading(true);
        const res = await getProduct_Option_Values(query.page, query.pageSize, query.search);
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
            pathname: `/product_option_values/update/${rowData.id}`, user: rowData
          })
        }
      }, {
        icon: () => <AddBox variant="contained" color="secondary"/>,
        tooltip: 'Add New', // This makes add button to appear in table toolbar instead for each row
        isFreeAction: true,
        onClick: (event, rowData) => {
          history.push("/product_option_values/add")
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
export default withRouter(Product_Option_ValuesTable);
