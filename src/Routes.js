import React, {Component} from "react";
import {Router, Switch, Route} from "react-router-dom";
import DashboardPage from "./components/dashboard/DashboardPage"
import LoginPage from "./components/login/LoginForm";
import SignUpPage from "./components/login/SignUpPage";
import history from './history';


import AdminsPage from "./components/admins/AdminsPage"
import AdminsAddUpdatePage from "./components/admins/AdminsAddUpdatePage"
import Brand_ModelsPage from "./components/brand_models/Brand_ModelsPage"
import Brand_ModelsAddUpdatePage from "./components/brand_models/Brand_ModelsAddUpdatePage"
import BrandsPage from "./components/brands/BrandsPage"
import BrandsAddUpdatePage from "./components/brands/BrandsAddUpdatePage"
import CategoriesPage from "./components/categories/CategoriesPage"
import CategoriesAddUpdatePage from "./components/categories/CategoriesAddUpdatePage"
import CountriesPage from "./components/countries/CountriesPage"
import CountriesAddUpdatePage from "./components/countries/CountriesAddUpdatePage"
import M_Option_ValuesPage from "./components/m_option_values/M_Option_ValuesPage"
import M_Option_ValuesAddUpdatePage from "./components/m_option_values/M_Option_ValuesAddUpdatePage"
import M_OptionsPage from "./components/m_options/M_OptionsPage"
import M_OptionsAddUpdatePage from "./components/m_options/M_OptionsAddUpdatePage"
import MarketsPage from "./components/markets/MarketsPage"
import MarketsAddUpdatePage from "./components/markets/MarketsAddUpdatePage"
import MigrationsPage from "./components/migrations/MigrationsPage"
import MigrationsAddUpdatePage from "./components/migrations/MigrationsAddUpdatePage"
import Option_ValuesPage from "./components/option_values/Option_ValuesPage"
import Option_ValuesAddUpdatePage from "./components/option_values/Option_ValuesAddUpdatePage"
import OptionsPage from "./components/options/OptionsPage"
import OptionsAddUpdatePage from "./components/options/OptionsAddUpdatePage"
import Product_M_Option_ValuesPage from "./components/product_m_option_values/Product_M_Option_ValuesPage"
import Product_M_Option_ValuesAddUpdatePage
  from "./components/product_m_option_values/Product_M_Option_ValuesAddUpdatePage"
import Product_Option_ValuesPage from "./components/product_option_values/Product_Option_ValuesPage"
import Product_Option_ValuesAddUpdatePage from "./components/product_option_values/Product_Option_ValuesAddUpdatePage"
import Product_Type_M_OptionsPage from "./components/product_type_m_options/Product_Type_M_OptionsPage"
import Product_Type_M_OptionsAddUpdatePage
  from "./components/product_type_m_options/Product_Type_M_OptionsAddUpdatePage"
import Product_TypesPage from "./components/product_types/Product_TypesPage"
import Product_TypesAddUpdatePage from "./components/product_types/Product_TypesAddUpdatePage"
import ProductsPage from "./components/products/ProductsPage"
import ProductsAddUpdatePage from "./components/products/ProductsAddUpdatePage"
import ShopsPage from "./components/shops/ShopsPage"
import ShopsAddUpdatePage from "./components/shops/ShopsAddUpdatePage"


export default class Routes extends Component {
  render() {
    return (<Router history={history}>
      <Switch>
        <Route path="/" exact component={LoginPage}/>
        <Route path="/signup" exact component={SignUpPage}/>
        <Route path="/dashboard" exact component={DashboardPage}/>
        <Route path="/admins" exact component={AdminsPage}/>
        <Route path="/admins/add" exact component={AdminsAddUpdatePage}/>
        <Route path="/admins/update/:id" exact component={AdminsAddUpdatePage}/>
        <Route path="/brand_models" exact component={Brand_ModelsPage}/>
        <Route path="/brand_models/add" exact component={Brand_ModelsAddUpdatePage}/>
        <Route path="/brand_models/update/:id" exact component={Brand_ModelsAddUpdatePage}/>
        <Route path="/brands" exact component={BrandsPage}/>
        <Route path="/brands/add" exact component={BrandsAddUpdatePage}/>
        <Route path="/brands/update/:id" exact component={BrandsAddUpdatePage}/>
        <Route path="/categories" exact component={CategoriesPage}/>
        <Route path="/categories/add" exact component={CategoriesAddUpdatePage}/>
        <Route path="/categories/update/:id" exact component={CategoriesAddUpdatePage}/>
        <Route path="/countries" exact component={CountriesPage}/>
        <Route path="/countries/add" exact component={CountriesAddUpdatePage}/>
        <Route path="/countries/update/:id" exact component={CountriesAddUpdatePage}/>
        <Route path="/m_option_values" exact component={M_Option_ValuesPage}/>
        <Route path="/m_option_values/add" exact component={M_Option_ValuesAddUpdatePage}/>
        <Route path="/m_option_values/update/:id" exact component={M_Option_ValuesAddUpdatePage}/>
        <Route path="/m_options" exact component={M_OptionsPage}/>
        <Route path="/m_options/add" exact component={M_OptionsAddUpdatePage}/>
        <Route path="/m_options/update/:id" exact component={M_OptionsAddUpdatePage}/>
        <Route path="/markets" exact component={MarketsPage}/>
        <Route path="/markets/add" exact component={MarketsAddUpdatePage}/>
        <Route path="/markets/update/:id" exact component={MarketsAddUpdatePage}/>
        <Route path="/migrations" exact component={MigrationsPage}/>
        <Route path="/migrations/add" exact component={MigrationsAddUpdatePage}/>
        <Route path="/migrations/update/:id" exact component={MigrationsAddUpdatePage}/>
        <Route path="/option_values" exact component={Option_ValuesPage}/>
        <Route path="/option_values/add" exact component={Option_ValuesAddUpdatePage}/>
        <Route path="/option_values/update/:id" exact component={Option_ValuesAddUpdatePage}/>
        <Route path="/options" exact component={OptionsPage}/>
        <Route path="/options/add" exact component={OptionsAddUpdatePage}/>
        <Route path="/options/update/:id" exact component={OptionsAddUpdatePage}/>
        <Route path="/product_m_option_values" exact component={Product_M_Option_ValuesPage}/>
        <Route path="/product_m_option_values/add" exact component={Product_M_Option_ValuesAddUpdatePage}/>
        <Route path="/product_m_option_values/update/:id" exact
               component={Product_M_Option_ValuesAddUpdatePage}/>
        <Route path="/product_option_values" exact component={Product_Option_ValuesPage}/>
        <Route path="/product_option_values/add" exact component={Product_Option_ValuesAddUpdatePage}/>
        <Route path="/product_option_values/update/:id" exact
               component={Product_Option_ValuesAddUpdatePage}/>
        <Route path="/product_type_m_options" exact component={Product_Type_M_OptionsPage}/>
        <Route path="/product_type_m_options/add" exact component={Product_Type_M_OptionsAddUpdatePage}/>
        <Route path="/product_type_m_options/update/:id" exact
               component={Product_Type_M_OptionsAddUpdatePage}/>
        <Route path="/product_types" exact component={Product_TypesPage}/>
        <Route path="/product_types/add" exact component={Product_TypesAddUpdatePage}/>
        <Route path="/product_types/update/:id" exact component={Product_TypesAddUpdatePage}/>
        <Route path="/products" exact component={ProductsPage}/>
        <Route path="/products/add" exact component={ProductsAddUpdatePage}/>
        <Route path="/products/update/:id" exact component={ProductsAddUpdatePage}/>
        <Route path="/shops" exact component={ShopsPage}/>
        <Route path="/shops/add" exact component={ShopsAddUpdatePage}/>
        <Route path="/shops/update/:id" exact component={ShopsAddUpdatePage}/>

      </Switch>
    </Router>)
  }
}
