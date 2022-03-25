import PageTemplate from "../templates/Template";
import MarketsTable from "./MarketsTable";
import React from "react";

const MarketsPage = (props) => {
    return(
    <PageTemplate title="Markets List">
        <MarketsTable/>
    </PageTemplate>)
}
export default MarketsPage;
