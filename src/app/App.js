import React from 'react';
import './App.css';
import AppBar from "./appbar/AppBar";
import {createMuiTheme} from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import lightGreen from '@material-ui/core/colors/lightGreen';
import {ThemeProvider} from '@material-ui/styles';

const theme = createMuiTheme({
    palette: {
        primary: lightGreen,
        secondary: orange,
    },
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: '#fafbfa'
            }
        },
        MuiButtonBase:{
            root:{
                textTransform: "none"
            }
        },
        MuiTab:{
            root:{
                textTransform: "none",
                minWidth: "20px !important"
            }
        }
    }
});


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabNum: 0,
            action: 'usersAgreements'
        };
        this.tabChange = (event, tabNum, action) => {
            this.setState({tabNum, action});
        }
        this.actionChange = (action) => {
            this.setState({action});
        }
    }

    render() {
        let tabNum = this.state.tabNum;
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <AppBar value={tabNum} handleChange={this.tabChange}/>
                    {tabNum === 0 && <span>{this.state.action}</span>}
                    {tabNum === 1 && <span>{this.state.action}</span>}
                    {tabNum === 2 && <span>{this.state.action}</span>}
                </div>
            </ThemeProvider>
        );
    }
}
