import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TableChartIcon from '@material-ui/icons/TableChart';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import history from './../../history';

export const mainListItems = (
  <div>
    <ListItem button onClick={() => history.push('/dashboard')}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button onClick={() => history.push('/admins')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Admins" />
</ListItem><ListItem button onClick={() => history.push('/brand_models')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Brand_Models" />
</ListItem><ListItem button onClick={() => history.push('/brands')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Brands" />
</ListItem><ListItem button onClick={() => history.push('/categories')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Categories" />
</ListItem><ListItem button onClick={() => history.push('/countries')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Countries" />
</ListItem><ListItem button onClick={() => history.push('/m_option_values')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="M_Option_Values" />
</ListItem><ListItem button onClick={() => history.push('/m_options')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="M_Options" />
</ListItem><ListItem button onClick={() => history.push('/markets')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Markets" />
</ListItem><ListItem button onClick={() => history.push('/migrations')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Migrations" />
</ListItem><ListItem button onClick={() => history.push('/option_values')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Option_Values" />
</ListItem><ListItem button onClick={() => history.push('/options')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Options" />
</ListItem><ListItem button onClick={() => history.push('/product_m_option_values')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Product_M_Option_Values" />
</ListItem><ListItem button onClick={() => history.push('/product_option_values')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Product_Option_Values" />
</ListItem><ListItem button onClick={() => history.push('/product_type_m_options')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Product_Type_M_Options" />
</ListItem><ListItem button onClick={() => history.push('/product_types')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Product_Types" />
</ListItem><ListItem button onClick={() => history.push('/products')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Products" />
</ListItem><ListItem button onClick={() => history.push('/shops')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Shops" />
</ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button onClick={() => history.push('/signup')}>
      <ListItemIcon>
        <LockOpenIcon />
      </ListItemIcon>
      <ListItemText primary="SignUp" />
    </ListItem>
    <ListItem button onClick={() => history.push('/')}>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
   
  </div>
);
