import PageTemplate from "../templates/Template";
import BrandsTable from "./BrandsTable";
import React from "react";

const BrandsPage = (props) => {
    return(
    <PageTemplate title="Brands List">
        <BrandsTable/>
    </PageTemplate>)
}
export default BrandsPage;
