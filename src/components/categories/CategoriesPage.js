import PageTemplate from "../templates/Template";
import CategoriesTable from "./CategoriesTable";
import React from "react";

const CategoriesPage = (props) => {
    return(
    <PageTemplate title="Categories List">
        <CategoriesTable/>
    </PageTemplate>)
}
export default CategoriesPage;
