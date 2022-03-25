import PageTemplate from "../templates/Template";
import Option_ValuesTable from "./Option_ValuesTable";
import React from "react";

const Option_ValuesPage = (props) => {
    return(
    <PageTemplate title="Option_Values List">
        <Option_ValuesTable/>
    </PageTemplate>)
}
export default Option_ValuesPage;
