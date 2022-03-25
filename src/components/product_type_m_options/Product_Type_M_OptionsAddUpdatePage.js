import {withRouter} from "react-router";
import TextField from "@material-ui/core/TextField";
import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Snackbar from '@material-ui/core/Snackbar';
import {Switch} from "@material-ui/core";
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
import {Loading} from "../templates/Loading";
import {
  addProduct_Type_M_Options, getProduct_Type_M_Options, getOneProduct_Type_M_Options, updateProduct_Type_M_Options
} from "../../repo/product_type_m_optionsRepo";


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const Product_Type_M_OptionsAddUpdatePage = (props) => {
  const [alertState, setAlertstate] = useState({
    open: false, vertical: 'bottom', horizontal: 'center', severity: "success", message: "",
  });
  const {vertical, horizontal, open, severity, message} = alertState;
  const [errorMessages, setErrorMessages] = useState({});
  const [product_type_m_options, setProduct_Type_M_Options] = useState(undefined);
  const [loading, setLoading] = useState(false);


  const checkErrors = () => {
    let errorList = {}


    setErrorMessages(errorList)
    return errorList
  }

  useEffect(() => {
    setLoading(true);


    if (props.match.params.id) {
      setLoading(true);
      getOneProduct_Type_M_Options(props.match.params.id).then((res) => {
        setProduct_Type_M_Options(res.data.data);
        setLoading(false);
      })
    } else {
      setProduct_Type_M_Options({})
    }
  }, [props.match.params.id])


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const errors = checkErrors()
      //if no errors then send data
      if (Object.keys(errors).length < 1) {
        if (product_type_m_options.id) {
          setLoading(true);
          var updateResponse = await updateProduct_Type_M_Options(product_type_m_options.id, product_type_m_options);
          setLoading(false);
          if (updateResponse && updateResponse.data) {
            if (updateResponse.data.code === 1) {
              setAlertstate({
                open: true,
                vertical: 'bottom',
                horizontal: 'center',
                message: "Record Updated Successfully.",
                severity: "success"
              });
            } else {
              setAlertstate({
                open: true,
                vertical: 'bottom',
                horizontal: 'center',
                message: "Updated failed. Please try again.",
                severity: "error"
              });
            }
          } else {
            setAlertstate({
              open: true,
              vertical: 'bottom',
              horizontal: 'center',
              message: "Updated failed. Please try again.",
              severity: "error"
            });
          }
          //props.history.push("/");
        } else {
          setLoading(true);
          var addResponse = await addProduct_Type_M_Options(product_type_m_options);
          setLoading(false);
          if (addResponse && addResponse.data) {
            if (addResponse.data.code === 1) {
              setAlertstate({
                open: true,
                vertical: 'bottom',
                horizontal: 'center',
                message: "Record Added Successfully.",
                severity: "success"
              });
            } else {
              setAlertstate({
                open: true,
                vertical: 'bottom',
                horizontal: 'center',
                message: "Add Record Failed. Please try again.",
                severity: "error"
              });
            }
          } else {
            setAlertstate({
              open: true,
              vertical: 'bottom',
              horizontal: 'center',
              message: "Add Record Failed. Please try again.",
              severity: "error"
            });

          }
          //props.history.push("/");
        }
      } else {
        setAlertstate({
          open: true,
          vertical: 'bottom',
          horizontal: 'center',
          message: "Invalid Data. Please try again.",
          severity: "error"
        });

      }
    } catch (e) {
      setAlertstate({
        open: true,
        vertical: 'bottom',
        horizontal: 'center',
        message: "Invalid Data. Please try again.",
        severity: "error"
      });

    }

  }

  const hideAlert = () => {
    setAlertstate({...alertState, open: false});
  };
  return (<PageTemplate title="Add/Update Product_Type_M_Options">
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">

          {(product_type_m_options !== undefined) ? <Grid spacing={3} container>
            <Grid xs={12} md={6} key={"0"} item>
              <TextField autoFocus fullWidth
                         helperText={errorMessages.product_type_id}
                         type={"number"}
                         onChange={(e) => {
                           setProduct_Type_M_Options({...product_type_m_options, product_type_id: e.target.value});
                           checkErrors()
                         }}
                         defaultValue={product_type_m_options.product_type_id}
                         error={(errorMessages.product_type_id) ? true : false}
                         label={"product_type_id"}/>
            </ Grid>
            <Grid xs={12} md={6} key={"1"} item>
              <TextField autoFocus fullWidth
                         helperText={errorMessages.m_option_id}
                         type={"number"}
                         onChange={(e) => {
                           setProduct_Type_M_Options({...product_type_m_options, m_option_id: e.target.value});
                           checkErrors()
                         }}
                         defaultValue={product_type_m_options.m_option_id}
                         error={(errorMessages.m_option_id) ? true : false}
                         label={"m_option_id"}/>
            </ Grid>
            <Grid xs={12} md={6} key={"2"} item>
              <TextField autoFocus fullWidth
                         helperText={errorMessages.m_option_value_id}
                         type={"number"}
                         onChange={(e) => {
                           setProduct_Type_M_Options({
                             ...product_type_m_options, m_option_value_id: e.target.value
                           });
                           checkErrors()
                         }}
                         defaultValue={product_type_m_options.m_option_value_id}
                         error={(errorMessages.m_option_value_id) ? true : false}
                         label={"m_option_value_id"}/>
            </ Grid>
            <Grid xs={12} md={6} item key={"3"}>
              <Grid container justify={"flex-end"} alignContent={"flex-end"}>
                <Button onClick={() => history.push('/product_type_m_options')} variant={"contained"}
                        type={"Button"} color="secondary">Cancel</Button>
              </Grid>
            </Grid>
            <Grid xs={12} md={6} item key={"4"}>
              <Grid container justify={"flex-end"} alignContent={"flex-end"}>
                <Button variant={"contained"} color="primary" type={"Sumbit"}>Save</Button>
              </Grid>
            </Grid>

          </Grid> : null}
        </form>


      </CardContent>
    </Card>
    <Snackbar autoHideDuration={6000}
              anchorOrigin={{vertical, horizontal}}
              open={open}
              onClose={hideAlert}
              key={vertical + horizontal}>
      <Alert onClose={hideAlert} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  </PageTemplate>)
}

export default withRouter(Product_Type_M_OptionsAddUpdatePage)
