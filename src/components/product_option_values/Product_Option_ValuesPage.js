import PageTemplate from "../templates/Template";
import Product_Option_ValuesTable from "./Product_Option_ValuesTable";
import React from "react";

const Product_Option_ValuesPage = (props) => {
  return (<PageTemplate title="Product_Option_Values List">
    <Product_Option_ValuesTable/>
  </PageTemplate>)
}
export default Product_Option_ValuesPage;
