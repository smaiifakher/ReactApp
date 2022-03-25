import PageTemplate from "../templates/Template";
import CountriesTable from "./CountriesTable";
import React from "react";

const CountriesPage = (props) => {
    return(
    <PageTemplate title="Countries List">
        <CountriesTable/>
    </PageTemplate>)
}
export default CountriesPage;
