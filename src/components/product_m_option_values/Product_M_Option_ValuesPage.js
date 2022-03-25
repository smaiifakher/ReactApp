import PageTemplate from "../templates/Template";
import Product_M_Option_ValuesTable from "./Product_M_Option_ValuesTable";
import React from "react";

const Product_M_Option_ValuesPage = (props) => {
    return(
    <PageTemplate title="Product_M_Option_Values List">
        <Product_M_Option_ValuesTable/>
    </PageTemplate>)
}
export default Product_M_Option_ValuesPage;
