import React,{Component} from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {orange500, blue500} from 'material-ui/styles/colors';

const styles = {
    errorStyle: {
      color: orange500,
    },
    underlineStyle: {
      borderColor: orange500,
    },
    floatingLabelStyle: {
      color: orange500,
    },
    floatingLabelFocusStyle: {
      color: blue500,
    },
  };

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            firstName: "",
            lastName: "",
            cellphone: "",
            password: "",
            confirmPass: "",
        }
    }

    firstNameChangeHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    lastNameChangeHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    cellphoneChangeHandler = (event) => {
        this.setState({cellphone: event.target.value});
    }

    passwordChangeHandler = (event) => {
        this.setState({password: event.target.value});
    }

    confirmPassChangeHandler = (event) => {
        this.setState({confirmPass: event.target.value});
    }

    formHandler = (event) => {
        event.preventDefault();
        alert(`${this.state.cellphone} --- ${this.state.password}`);
    }

    render() {
        return(
            <form>
     
                <TextField 
                    floatingLabelText="first name"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatinLabelFocusStyle={styles.floatinLabelFocusStyle}
                    onChange={this.firstNameChangeHandler}/>

                <TextField 
                    floatingLabelText="last name"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatinLabelFocusStyle={styles.floatinLabelFocusStyle}
                    onChange={this.lastNameChangeHandler}/>

               <TextField 
                    floatingLabelText="cellPhone"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatinLabelFocusStyle={styles.floatinLabelFocusStyle}
                    onChange={this.cellphoneChangeHandler}/>

                <TextField 
                    floatingLabelText="password"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatinLabelFocusStyle={styles.floatinLabelFocusStyle}
                    onChange={this.passwordChangeHandler}
                    type="password"/>

                <TextField 
                    floatingLabelText="confirm password"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatinLabelFocusStyle={styles.floatinLabelFocusStyle}
                    onChange={this.confirmPassChangeHandler}
                    type="password"/>

                <RaisedButton 
                    label="Login" 
                    primary={true} 
                    onClick={this.formHandler}/>

            </form>
        )
    }
}