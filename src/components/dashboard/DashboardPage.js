import PageTemplate from "../templates/Template";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DashCard from "./DashboardCard"

const DashboardPage = () => {

    return(
    <PageTemplate title="Dashboard">
    <Grid container direction="row"  justify="center" alignItems="center">
    <DashCard pagename='admins'/>
<DashCard pagename='brand_models'/>
<DashCard pagename='brands'/>
<DashCard pagename='categories'/>
<DashCard pagename='countries'/>
<DashCard pagename='m_option_values'/>
<DashCard pagename='m_options'/>
<DashCard pagename='markets'/>
<DashCard pagename='migrations'/>
<DashCard pagename='option_values'/>
<DashCard pagename='options'/>
<DashCard pagename='product_m_option_values'/>
<DashCard pagename='product_option_values'/>
<DashCard pagename='product_type_m_options'/>
<DashCard pagename='product_types'/>
<DashCard pagename='products'/>
<DashCard pagename='shops'/>

    
    
    
    </Grid>
    </PageTemplate>)
}
export default DashboardPage;

