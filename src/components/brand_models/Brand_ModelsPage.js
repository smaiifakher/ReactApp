import PageTemplate from "../templates/Template";
import Brand_ModelsTable from "./Brand_ModelsTable";
import React from "react";

const Brand_ModelsPage = (props) => {
    return(
    <PageTemplate title="Brand_Models List">
        <Brand_ModelsTable/>
    </PageTemplate>)
}
export default Brand_ModelsPage;
