import React from 'react';
import './App.css';
import AppBar from "./appbar/appbar";
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
            tabNum: 0
        };
        this.tabChange = (event, tabNum) => {
            this.setState({tabNum});
        }
    }

    render() {
        let tabNum = this.state.tabNum;
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <AppBar value={tabNum} handleChange={this.tabChange}/>
                    {tabNum === 0 && <span>0</span>}
                    {tabNum === 1 && <span>1</span>}
                    {tabNum === 2 && <span>2</span>}
                </div>
            </ThemeProvider>
        );
    }
}
