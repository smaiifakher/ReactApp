import PageTemplate from "../templates/Template";
import ShopsTable from "./ShopsTable";
import React from "react";

const ShopsPage = (props) => {
    return(
    <PageTemplate title="Shops List">
        <ShopsTable/>
    </PageTemplate>)
}
export default ShopsPage;
