import PageTemplate from "../templates/Template";
import M_Option_ValuesTable from "./M_Option_ValuesTable";
import React from "react";

const M_Option_ValuesPage = (props) => {
    return(
    <PageTemplate title="M_Option_Values List">
        <M_Option_ValuesTable/>
    </PageTemplate>)
}
export default M_Option_ValuesPage;
