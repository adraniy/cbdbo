import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import {ReactComponent as Logo} from './logo.svg';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default class AppBar extends React.Component {
    render() {
        return (
            <MuiAppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{display: "flex", paddingRight: '20px'}}>
                        <Logo/>
                    </Typography>

                    <Tabs value={this.props.value} onChange={this.props.handleChange}>
                        <Tab label="Брокерское обслуживание"/>
                        <Tab label="Квалифицированный инвестор"/>
                        <Tab label="Налоговый агент"/>
                        <Tab label="Настройки"/>
                        <Tab label="Отчеты"/>
                        <Tab label="Справочники"/>
                        <Tab label="Окно"/>
                        <Tab label="Справка"/>
                    </Tabs>
                </Toolbar>
            </MuiAppBar>
        );
    }
}
