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
import {addMarkets, getMarkets, getOneMarkets, updateMarkets} from "../../repo/marketsRepo";


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const MarketsAddUpdatePage = (props) => {
  const [alertState, setAlertstate] = useState({
    open: false, vertical: 'bottom', horizontal: 'center', severity: "success", message: "",
  });
  const {vertical, horizontal, open, severity, message} = alertState;
  const [errorMessages, setErrorMessages] = useState({});
  const [markets, setMarkets] = useState(undefined);
  const [loading, setLoading] = useState(false);


  const checkErrors = () => {
    let errorList = {}
    if (markets.name === "" || markets.name === undefined) {
      errorList = {...errorList, name: "Required field!"}
    }
    if (markets.address === "" || markets.address === undefined) {
      errorList = {...errorList, address: "Required field!"}
    }
    if (markets.shops_count === "" || markets.shops_count === undefined) {
      errorList = {...errorList, shops_count: "Required field!"}
    }
    if (markets.products_count === "" || markets.products_count === undefined) {
      errorList = {...errorList, products_count: "Required field!"}
    }
    if (markets.photo === "" || markets.photo === undefined) {
      errorList = {...errorList, photo: "Required field!"}
    }
    if (markets.status === "" || markets.status === undefined) {
      errorList = {...errorList, status: "Required field!"}
    }


    setErrorMessages(errorList)
    return errorList
  }

  useEffect(() => {
    setLoading(true);


    if (props.match.params.id) {
      setLoading(true);
      getOneMarkets(props.match.params.id).then((res) => {
        setMarkets(res.data.data);
        setLoading(false);
      })
    } else {
      setMarkets({})
    }
  }, [props.match.params.id])


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const errors = checkErrors()
      //if no errors then send data
      if (Object.keys(errors).length < 1) {
        if (markets.id) {
          setLoading(true);
          var updateResponse = await updateMarkets(markets.id, markets);
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
          var addResponse = await addMarkets(markets);
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
  return (<PageTemplate title="Add/Update Markets">
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">

          {(markets !== undefined) ? <Grid spacing={3} container>
            <Grid xs={12} md={6} key={"0"} item>
              <TextField required autoFocus fullWidth
                         helperText={errorMessages.name}
                         type={"text"}
                         onChange={(e) => {
                           setMarkets({...markets, name: e.target.value});
                           checkErrors()
                         }}
                         defaultValue={markets.name}
                         error={(errorMessages.name) ? true : false}
                         label={"name"}/>
            </ Grid>
            <Grid xs={12} md={6} key={"1"} item>
              <TextField required autoFocus fullWidth
                         helperText={errorMessages.address}
                         type={"text"}
                         onChange={(e) => {
                           setMarkets({...markets, address: e.target.value});
                           checkErrors()
                         }}
                         defaultValue={markets.address}
                         error={(errorMessages.address) ? true : false}
                         label={"address"}/>
            </ Grid>
            <Grid xs={12} md={6} key={"2"} item>
              <TextField required autoFocus fullWidth
                         helperText={errorMessages.shops_count}
                         type={"number"}
                         onChange={(e) => {
                           setMarkets({...markets, shops_count: e.target.value});
                           checkErrors()
                         }}
                         defaultValue={markets.shops_count}
                         error={(errorMessages.shops_count) ? true : false}
                         label={"shops_count"}/>
            </ Grid>
            <Grid xs={12} md={6} key={"3"} item>
              <TextField required autoFocus fullWidth
                         helperText={errorMessages.products_count}
                         type={"number"}
                         onChange={(e) => {
                           setMarkets({...markets, products_count: e.target.value});
                           checkErrors()
                         }}
                         defaultValue={markets.products_count}
                         error={(errorMessages.products_count) ? true : false}
                         label={"products_count"}/>
            </ Grid>
            <Grid xs={12} md={6} key={"4"} item>
              <TextField required autoFocus fullWidth
                         helperText={errorMessages.photo}
                         type={"text"}
                         onChange={(e) => {
                           setMarkets({...markets, photo: e.target.value});
                           checkErrors()
                         }}
                         defaultValue={markets.photo}
                         error={(errorMessages.photo) ? true : false}
                         label={"photo"}/>
            </ Grid>
            <Grid xs={12} md={6} key={"5"} item>
              <TextField required autoFocus fullWidth
                         helperText={errorMessages.status}
                         type={"number"}
                         onChange={(e) => {
                           setMarkets({...markets, status: e.target.value});
                           checkErrors()
                         }}
                         defaultValue={markets.status}
                         error={(errorMessages.status) ? true : false}
                         label={"status"}/>
            </ Grid>
            <Grid xs={12} md={6} item key={"6"}>
              <Grid container justify={"flex-end"} alignContent={"flex-end"}>
                <Button onClick={() => history.push('/markets')} variant={"contained"} type={"Button"}
                        color="secondary">Cancel</Button>
              </Grid>
            </Grid>
            <Grid xs={12} md={6} item key={"7"}>
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

export default withRouter(MarketsAddUpdatePage)
