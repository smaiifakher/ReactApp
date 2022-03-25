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
  addM_Option_Values, getM_Option_Values, getOneM_Option_Values, updateM_Option_Values
} from "../../repo/m_option_valuesRepo";


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const M_Option_ValuesAddUpdatePage = (props) => {
  const [alertState, setAlertstate] = useState({
    open: false, vertical: 'bottom', horizontal: 'center', severity: "success", message: "",
  });
  const {vertical, horizontal, open, severity, message} = alertState;
  const [errorMessages, setErrorMessages] = useState({});
  const [m_option_values, setM_Option_Values] = useState(undefined);
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
      getOneM_Option_Values(props.match.params.id).then((res) => {
        setM_Option_Values(res.data.data);
        setLoading(false);
      })
    } else {
      setM_Option_Values({})
    }
  }, [props.match.params.id])


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const errors = checkErrors()
      //if no errors then send data
      if (Object.keys(errors).length < 1) {
        if (m_option_values.id) {
          setLoading(true);
          var updateResponse = await updateM_Option_Values(m_option_values.id, m_option_values);
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
          var addResponse = await addM_Option_Values(m_option_values);
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
  return (<PageTemplate title="Add/Update M_Option_Values">
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">

          {(m_option_values !== undefined) ? <Grid spacing={3} container>
            <Grid xs={12} md={6} key={"0"} item>
              <TextField autoFocus fullWidth
                         helperText={errorMessages.m_option_id}
                         type={"number"}
                         onChange={(e) => {
                           setM_Option_Values({...m_option_values, m_option_id: e.target.value});
                           checkErrors()
                         }}
                         defaultValue={m_option_values.m_option_id}
                         error={(errorMessages.m_option_id) ? true : false}
                         label={"m_option_id"}/>
            </ Grid>
            <Grid xs={12} md={6} item key={"1"}>
              <Grid container justify={"flex-end"} alignContent={"flex-end"}>
                <Button onClick={() => history.push('/m_option_values')} variant={"contained"} type={"Button"}
                        color="secondary">Cancel</Button>
              </Grid>
            </Grid>
            <Grid xs={12} md={6} item key={"2"}>
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

export default withRouter(M_Option_ValuesAddUpdatePage)
