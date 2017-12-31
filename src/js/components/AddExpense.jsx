import React,{Component} from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RadioButton';
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

export default class AddExpense extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            userId: 0,
            friendId: 0,
            price: 0,
            reason: "",
            date: "",
        }
    }

    priceChangeHandler = (event) => {
        this.setState({price: event.target.value});
    }

    reasonChangeHandler = (event) => {
        this.setState({reason: event.target.value});
    }

    dateChangeHandler = (event) => {
        this.setState({date: event.target.value});
    }

    formHandler = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <form>

                <TextField
                    floatingLabelText="price"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatinLabelFocusStyle={styles.floatinLabelFocusStyle}
                    onChange={this.priceChangeHandler}/>

                <TextField
                    floatingLabelText="reason"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatinLabelFocusStyle={styles.floatinLabelFocusStyle}
                    onChange={this.reasonChangeHandler}/>

                <TextField
                    floatingLabelText="date"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatinLabelFocusStyle={styles.floatinLabelFocusStyle}
                    onChange={this.dateChangeHandler}/>

                <RaisedButton
                    label="Add"
                    primary={true} 
                    onClick={this.formHandler} />

            </form>
        )
    }
}