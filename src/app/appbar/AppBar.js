import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import {ReactComponent as Logo} from './logo.svg';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Popover from "@material-ui/core/Popover";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

const styles = {
    Tab: {
        flexDirection: "row-reverse"
    }
};

export class AppBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            action: 1,
            anchorEl: null
        };
        this.handleClick = (event) => {
            event.stopPropagation();
            event.preventDefault();
            this.setState({
                anchorEl: event.currentTarget
            });
        };

        this.handleClose = ()=> this.setState({ anchorEl: null});

        this.handleMenuItemClick =(menuItem) => {
            this.handleClose();
            this.props.handleChange(null, 0, menuItem)
        };
    }

    render() {
        const open = Boolean(this.state.anchorEl);
        return (
            <MuiAppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{display: "flex", paddingRight: '20px'}}>
                        <Logo/>
                    </Typography>

                    <Tabs value={this.props.value} onChange={(e, v)=> {
                        if (v !== 0) {
                            this.props.handleChange(e,v, e.target.textContent);
                        }}
                    }>
                        <Tab onClick={this.handleClick} classes={{wrapper: this.props.classes.Tab}} label="Брокерское обслуживание"
                             icon={<ArrowDropDownIcon  />}
                        />
                        <Tab  label="Квалифицированный инвестор"/>
                        <Tab  label="Налоговый агент"/>
                        <Tab  label="Настройки"/>
                        <Tab  label="Отчеты"/>
                        <Tab  label="Справочники"/>
                        <Tab  label="Окно"/>
                        <Tab  label="Справка"/>
                    </Tabs>
                </Toolbar>
                <Popover
                    open={open}
                    anchorEl={this.state.anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center"
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "center"
                    }}
                >
                    <MenuItem disabled onClick={() => this.handleMenuItemClick("usersAgreements")}>
                        Список договоров физ.лиц
                    </MenuItem>
                    <MenuItem  onClick={() => this.handleMenuItemClick("companyAgreements")}>
                        Список договоров юр.лиц
                    </MenuItem>
                    <MenuItem  disabled onClick={() => this.handleMenuItemClick("requests")}>
                        Список запросов
                    </MenuItem>
                </Popover>
            </MuiAppBar>
        );
    }
}
export default withStyles(styles)(AppBar);