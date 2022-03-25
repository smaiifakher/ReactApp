import { Switch } from '@material-ui/core';
import React from 'react';
import Avatar from 'react-avatar';
import Input from "@material-ui/core/Input";

/*
In order to validate errors on the input field you can
override the editComponent of the Material Table to add a new material-ui Input fields
and use props for validation.
Information on material-ui Input element https://material-ui.com/api/input/
Information on material-table Props https://material-table.com/#/docs/all-props
You can also find an example of an overridden element bellow. Overriding the render method is not a must.
 */
const GetMigrationsColumns = (totalCount) => [
  {title: "Id", field: "id",hidden:true},

  {title: "Migration", field: "migration"},
{title: "Batch", field: "batch"},

]
export default GetMigrationsColumns;
