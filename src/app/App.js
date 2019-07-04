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
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import NewInvestorDialog from "./newInvestor/newInvestorModal";
import Paper from "@material-ui/core/Paper";
import ManagersModal from "./managers/managersModel";
import Manager from "./managers/manager";

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

        MuiFormControl: {
            root: {
                color: '#757575',
                '&.noLabel': {
                    '& label + .MuiInput-formControl': {
                        marginTop: 0
                    }
                }
            }
        },
        MuiTableCell: {
            root: {
                borderBottom: 'none'
            },
            head: {
                borderBottom: '1px solid #757575',
                fontWeight: 'bold',
                fontSize: '14px',
                padding: "14px 24px 14px 16px !important"
            },
            sizeSmall: {
                padding: '0 16px'
            }
        },
        MuiTab: {
            labelIcon: {
                minHeight: '48px'
            },
            root: {
                textTransform: "none",
                minWidth: "20px !important",
                maxWidth: '300px'
            }
        },
        MuiDialogContent: {
            root: {
                padding: '8px'
            }
        },
        MuiCheckbox: {
            root: {
                '& .MuiSvgIcon-root': {
                    width: '18px',
                    height: '18px'
                }
            }
        },
        MuiRadio: {
            root: {
                '& .MuiSvgIcon-root': {
                    width: '18px',
                    height: '18px'
                }
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
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <div style={{height: '100%'}}>
                            <AppBar value={tabNum} handleChange={this.tabChange}/>
                            <Paper style={{height: '100%'}}>
                                {action === 'companyAgreements' && <CompanyAgreements/>
                                || (<span>{this.state.action}</span>)}
                                <NewInvestorDialog/>
                                <ManagersModal/>
                                <Manager/>
                            </Paper>
                        </div>
                    </MuiPickersUtilsProvider>
                </Provider>
            </ThemeProvider>
        );
    }
}
