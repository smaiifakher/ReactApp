import {withRouter} from "react-router";
import TextField from "@material-ui/core/TextField";
import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Snackbar from '@material-ui/core/Snackbar';
import { Switch } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import PageTemplate from "../templates/Template";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputLabel from '@material-ui/core/InputLabel';
import history from '../../history';
import { Loading } from "../templates/Loading";
import {addProducts, getProducts,getOneProducts, updateProducts} from "../../repo/productsRepo";





function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const ProductsAddUpdatePage = (props)=>{
    const [alertState, setAlertstate] = useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'center',
        severity: "success",
        message:"",
      });
    const { vertical, horizontal, open, severity, message } = alertState;
    const [errorMessages, setErrorMessages] = useState({});
    const [products,setProducts] = useState(undefined);
    const [loading, setLoading] = useState(false);
    

    const checkErrors = () => {
        let errorList = {}
        if(products.name === "" || products.name === undefined)
{
   errorList = { ...errorList,name: "Required field!"}
}
if(products.price === "" || products.price === undefined)
{
   errorList = { ...errorList,price: "Required field!"}
}
if(products.discount_price === "" || products.discount_price === undefined)
{
   errorList = { ...errorList,discount_price: "Required field!"}
}
if(products.discount === "" || products.discount === undefined)
{
   errorList = { ...errorList,discount: "Required field!"}
}
if(products.quantity === "" || products.quantity === undefined)
{
   errorList = { ...errorList,quantity: "Required field!"}
}
if(products.views === "" || products.views === undefined)
{
   errorList = { ...errorList,views: "Required field!"}
}
if(products.likes === "" || products.likes === undefined)
{
   errorList = { ...errorList,likes: "Required field!"}
}
if(products.sort_order === "" || products.sort_order === undefined)
{
   errorList = { ...errorList,sort_order: "Required field!"}
}
if(products.status === "" || products.status === undefined)
{
   errorList = { ...errorList,status: "Required field!"}
}


        setErrorMessages(errorList)
        return errorList
    }

    useEffect(()=>{
     setLoading(true);
    
      
        if(props.match.params.id) {
            setLoading(true);
            getOneProducts(props.match.params.id).then((res) => {
                setProducts(res.data.data);
                setLoading(false);
            })
        }else{
            setProducts({})
        }
    },[props.match.params.id])
   

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        const errors = checkErrors()
        //if no errors then send data
        if(Object.keys(errors).length<1) {
            if (products.id) {
            setLoading(true);
               var updateResponse =  await updateProducts(products.id,products);
               setLoading(false);
               if(updateResponse && updateResponse.data){
                   if(updateResponse.data.code===1){
                    setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Record Updated Successfully.",severity:"success"});
                     }else{
                    setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Updated failed. Please try again.", severity:"error"});
                }
               }else{
                setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Updated failed. Please try again.", severity:"error"});
            }
                //props.history.push("/");
            } else {
            setLoading(true);
                var addResponse = await addProducts(products);
                setLoading(false);
                if(addResponse && addResponse.data){
                    if(addResponse.data.code===1){
                        setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Record Added Successfully.",severity:"success"});
                          }else{
                        setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Add Record Failed. Please try again.",severity:"error"});
                    }
                }else{
                    setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Add Record Failed. Please try again.",severity:"error"});
                    
                }
                //props.history.push("/");
            }
        }else{
            setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Invalid Data. Please try again.",severity:"error"});
                   
        } 
    }catch (e) {
        setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Invalid Data. Please try again.",severity:"error"});
            
    }

    }
   
    const hideAlert = () => {
        setAlertstate({ ...alertState, open: false });
      };
    return(
        <PageTemplate title="Add/Update Products">
            <Card>
            <CardContent>
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
               
                    {(products!==undefined )?
                        <Grid spacing={3} container>
                           <Grid xs={12} md={6} key={"0"} item>
<TextField  autoFocus fullWidth
helperText ={errorMessages.product_type_id}
type ={"number"}
onChange={(e)=>{setProducts({...products,product_type_id:e.target.value});checkErrors()}}
defaultValue ={products.product_type_id}
error ={(errorMessages.product_type_id)?true:false}
label ={"product_type_id"}/>
</ Grid >
<Grid xs={12} md={6} key={"1"} item>
<TextField  autoFocus fullWidth
helperText ={errorMessages.category_id}
type ={"number"}
onChange={(e)=>{setProducts({...products,category_id:e.target.value});checkErrors()}}
defaultValue ={products.category_id}
error ={(errorMessages.category_id)?true:false}
label ={"category_id"}/>
</ Grid >
<Grid xs={12} md={6} key={"2"} item>
<TextField  autoFocus fullWidth
helperText ={errorMessages.market_id}
type ={"number"}
onChange={(e)=>{setProducts({...products,market_id:e.target.value});checkErrors()}}
defaultValue ={products.market_id}
error ={(errorMessages.market_id)?true:false}
label ={"market_id"}/>
</ Grid >
<Grid xs={12} md={6} key={"3"} item>
<TextField  autoFocus fullWidth
helperText ={errorMessages.shop_id}
type ={"number"}
onChange={(e)=>{setProducts({...products,shop_id:e.target.value});checkErrors()}}
defaultValue ={products.shop_id}
error ={(errorMessages.shop_id)?true:false}
label ={"shop_id"}/>
</ Grid >
<Grid xs={12} md={6} key={"4"} item>
<TextField  autoFocus fullWidth
helperText ={errorMessages.country_id}
type ={"number"}
onChange={(e)=>{setProducts({...products,country_id:e.target.value});checkErrors()}}
defaultValue ={products.country_id}
error ={(errorMessages.country_id)?true:false}
label ={"country_id"}/>
</ Grid >
<Grid xs={12} md={6} key={"5"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.name}
type ={"text"}
onChange={(e)=>{setProducts({...products,name:e.target.value});checkErrors()}}
defaultValue ={products.name}
error ={(errorMessages.name)?true:false}
label ={"name"}/>
</ Grid >
<Grid xs={12} md={6} key={"6"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.price}
type ={"number"}
onChange={(e)=>{setProducts({...products,price:e.target.value});checkErrors()}}
defaultValue ={products.price}
error ={(errorMessages.price)?true:false}
label ={"price"}/>
</ Grid >
<Grid xs={12} md={6} key={"7"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.discount_price}
type ={"number"}
onChange={(e)=>{setProducts({...products,discount_price:e.target.value});checkErrors()}}
defaultValue ={products.discount_price}
error ={(errorMessages.discount_price)?true:false}
label ={"discount_price"}/>
</ Grid >
<Grid xs={12} md={6} key={"8"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.discount}
type ={"number"}
onChange={(e)=>{setProducts({...products,discount:e.target.value});checkErrors()}}
defaultValue ={products.discount}
error ={(errorMessages.discount)?true:false}
label ={"discount"}/>
</ Grid >
<Grid xs={12} md={6} key={"9"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.quantity}
type ={"number"}
onChange={(e)=>{setProducts({...products,quantity:e.target.value});checkErrors()}}
defaultValue ={products.quantity}
error ={(errorMessages.quantity)?true:false}
label ={"quantity"}/>
</ Grid >
<Grid xs={12} md={6} key={"10"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.views}
type ={"number"}
onChange={(e)=>{setProducts({...products,views:e.target.value});checkErrors()}}
defaultValue ={products.views}
error ={(errorMessages.views)?true:false}
label ={"views"}/>
</ Grid >
<Grid xs={12} md={6} key={"11"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.likes}
type ={"number"}
onChange={(e)=>{setProducts({...products,likes:e.target.value});checkErrors()}}
defaultValue ={products.likes}
error ={(errorMessages.likes)?true:false}
label ={"likes"}/>
</ Grid >
<Grid xs={12} md={6} key={"12"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.sort_order}
type ={"number"}
onChange={(e)=>{setProducts({...products,sort_order:e.target.value});checkErrors()}}
defaultValue ={products.sort_order}
error ={(errorMessages.sort_order)?true:false}
label ={"sort_order"}/>
</ Grid >
<Grid xs={12} md={6} key={"13"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.status}
type ={"number"}
onChange={(e)=>{setProducts({...products,status:e.target.value});checkErrors()}}
defaultValue ={products.status}
error ={(errorMessages.status)?true:false}
label ={"status"}/>
</ Grid >
<Grid xs={12}  md={6} item key={"14"}>
<Grid container justify={"flex-end"} alignContent={"flex-end"}>
<Button onClick={() => history.push('/products')} variant={"contained"} type={"Button"} color="secondary">Cancel</Button>
</Grid>
</Grid>
<Grid xs={12}  md={6} item key={"15"}>
<Grid container justify={"flex-end"} alignContent={"flex-end"}>
<Button variant={"contained"} color="primary"  type={"Sumbit"}>Save</Button>
</Grid>
</Grid>

                        </Grid>
                        :null}
                </form>
                
               
                </CardContent>
                </Card>
                <Snackbar autoHideDuration={6000}
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={hideAlert}
                    key={vertical + horizontal}>
                       <Alert onClose={hideAlert}  severity={severity}>
                       {message}
                    </Alert>
                </Snackbar>
        </PageTemplate>
    )
}

export default withRouter(ProductsAddUpdatePage)
