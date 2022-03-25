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
const GetProductsColumns = (totalCount) => [
  {title: "Id", field: "id",hidden:true},

  {title: "ProductTypeId", field: "product_type_id"},
{title: "CategoryId", field: "category_id"},
{title: "MarketId", field: "market_id"},
{title: "ShopId", field: "shop_id"},
{title: "CountryId", field: "country_id"},
{title: "Name", field: "name"},
{title: "Price", field: "price"},
{title: "DiscountPrice", field: "discount_price"},
{title: "Discount", field: "discount"},
{title: "Quantity", field: "quantity"},
{title: "Views", field: "views"},
{title: "Likes", field: "likes"},
{title: "SortOrder", field: "sort_order"},
{title: "Status", field: "status"},

]
export default GetProductsColumns;
