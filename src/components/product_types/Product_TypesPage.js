import PageTemplate from "../templates/Template";
import Product_TypesTable from "./Product_TypesTable";
import React from "react";

const Product_TypesPage = (props) => {
    return(
    <PageTemplate title="Product_Types List">
        <Product_TypesTable/>
    </PageTemplate>)
}
export default Product_TypesPage;
