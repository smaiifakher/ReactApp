import PageTemplate from "../templates/Template";
import OptionsTable from "./OptionsTable";
import React from "react";

const OptionsPage = (props) => {
    return(
    <PageTemplate title="Options List">
        <OptionsTable/>
    </PageTemplate>)
}
export default OptionsPage;
