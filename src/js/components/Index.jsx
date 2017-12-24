import React,{Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/svg-icons'
import ActionHome from 'material-ui/svg-icons/action/home';

const HomeIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

export default class Index extends Component {

    handleLeftButtonClick() {
        alert("Left button clicked!!!!");
    }

    render() {
        return (
            <AppBar 
                title="Index" 
                iconElementLeft={<IconButton onClick={this.handleLeftButtonClick}><ActionHome /></IconButton>}/>
        )
    }
}