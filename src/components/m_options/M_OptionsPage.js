import PageTemplate from "../templates/Template";
import M_OptionsTable from "./M_OptionsTable";
import React from "react";

const M_OptionsPage = (props) => {
    return(
    <PageTemplate title="M_Options List">
        <M_OptionsTable/>
    </PageTemplate>)
}
export default M_OptionsPage;
