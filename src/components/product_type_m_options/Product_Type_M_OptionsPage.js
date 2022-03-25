import PageTemplate from "../templates/Template";
import Product_Type_M_OptionsTable from "./Product_Type_M_OptionsTable";
import React from "react";

const Product_Type_M_OptionsPage = (props) => {
    return(
    <PageTemplate title="Product_Type_M_Options List">
        <Product_Type_M_OptionsTable/>
    </PageTemplate>)
}
export default Product_Type_M_OptionsPage;
