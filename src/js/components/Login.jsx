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

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            cellphone: "",
            password: "",
        }
    }

    cellphoneChangeHandler = (event) => {
        this.setState({cellphone: event.target.value});
    }

    passwordChangeHandler = (event) => {
        this.setState({password: event.target.value});
    }

    formHandler = (event) => {
        event.preventDefault();
        alert(`${this.state.cellphone} --- ${this.state.password}`);
    }

    render() {
        return(
            <form>
            
                <TextField 
                    floatingLabelText="cellPhone"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatinLabelFocusStyle={styles.floatinLabelFocusStyle}
                    onChange={this.cellphoneChangeHandler}/>

                <TextField 
                    floatingLabelText="password"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatinLabelFocusStyle={styles.floatinLabelFocusStyle}
                    onChange={this.passwordChangeHandler}/>

                <RaisedButton 
                    label="Login" 
                    primary={true} 
                    onClick={this.formHandler}/>

            </form>
        )
    }
}