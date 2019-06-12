import React from 'react';
import './App.css';
import AppBar from "./appbar/AppBar";
import {createMuiTheme} from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import lightGreen from '@material-ui/core/colors/lightGreen';
import {ThemeProvider} from '@material-ui/styles';
import CompanyAgreements from "./companyAgreemets/CompanyAgreements";
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';

import NewInvestorDialog from "./newInvestor/newInvestorModal";

const store = createStore(rootReducer,
    applyMiddleware(thunk)
);

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
        MuiButtonBase: {
            root: {
                textTransform: "none"
            }
        },
        MuiButton: {
            label: {
                textTransform: "none"
            }
        },
        MuiTab: {
            root: {
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
            action: 'companyAgreements'
        };
        this.tabChange = (event, tabNum, action) => {
            this.setState({tabNum, action});
        };
        this.actionChange = (action) => {
            this.setState({action});
        }
    }

    render() {
        let tabNum = this.state.tabNum;
        let action = this.state.action;
        return (
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <div>
                        <AppBar value={tabNum} handleChange={this.tabChange}/>
                        {action === 'companyAgreements' && <CompanyAgreements/>
                        || (<span>{this.state.action}</span>)}
                        <NewInvestorDialog/>
                    </div>
                </Provider>
            </ThemeProvider>
        );
    }
}
