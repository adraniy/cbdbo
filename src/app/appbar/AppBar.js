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
import {withStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import FormatListBulleted from "@material-ui/icons/FormatListBulleted";
import Drawer from "@material-ui/core/Drawer";
import Edit from "@material-ui/icons/Edit";
import Group from "@material-ui/icons/Group";
import Group1 from "@material-ui/icons/GroupTwoTone";
import Filter from "@material-ui/icons/MoreVert"
import IconButton from "@material-ui/core/IconButton";
import * as actions from "../redux/actions";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'

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
            anchorEl: null,
            openDrawer: false
        };
        this.handleClick = (event) => {
            event.stopPropagation();
            event.preventDefault();
            this.setState({
                anchorEl: event.currentTarget
            });
        };

        this.handleClose = () => this.setState({anchorEl: null});

        this.handleMenuItemClick = (menuItem) => {
            this.handleClose();
            this.props.handleChange(null, 0, menuItem)
        };
    }

    render() {
        const open = Boolean(this.state.anchorEl);
        return (
            <MuiAppBar position="static">
                <Toolbar style={{minHeight: '48px'}}>
                    <Typography variant="h6" style={{display: "flex", paddingRight: '20px'}}>
                        <Logo/>
                    </Typography>

                    <Tabs value={this.props.value} onChange={(e, v) => {
                        if (v !== 0) {
                            this.props.handleChange(e, v, e.target.textContent);
                        }
                    }
                    }>
                        <Tab onClick={this.handleClick} classes={{wrapper: this.props.classes.Tab}}
                             label="Брокерское обслуживание"
                             icon={<ArrowDropDownIcon/>}/>
                        <Tab label="Квалифицированный инвестор"/>
                        <Tab label="Налоговый агент"/>
                        <Tab label="Настройки"/>
                        <Tab label="Отчеты"/>
                        <Tab label="Справочники"/>
                        <Tab label="Окно"/>
                        <Tab label="Справка"/>
                    </Tabs>
                    <IconButton style={{position: 'absolute', right: 0}}
                                onClick={() => this.setState({openDrawer: true})}>
                        <Filter/>
                    </IconButton>
                </Toolbar>
                <Drawer anchor="right" open={this.state.openDrawer} onClose={() => this.setState({openDrawer: false})}>


                    <FormControl style={{marginTop: '20px'}} fullWidth>
                        <Button style={{justifyContent: 'flex-start'}}
                                onClick={() => {
                                    this.setState({openDrawer: false});
                                    this.props.actions.toggleManagersDialog();
                                }}> <Group
                            style={{paddingRight: '10px'}}/> Распорядители </Button>
                    </FormControl>
                    <FormControl fullWidth>
                        <Button style={{justifyContent: 'flex-start'}}> <Group1
                            style={{paddingRight: '10px'}}/> Доверенные лица </Button>
                    </FormControl>
                    <FormControl fullWidth>
                        <Button style={{justifyContent: 'flex-start'}}> <FormatListBulleted
                            style={{paddingRight: '10px'}}/> Изменения </Button>
                    </FormControl>
                    <FormControl fullWidth>
                        <Button style={{justifyContent: 'flex-start'}}> <FormatListBulleted
                            style={{paddingRight: '10px'}}/>Степень риска </Button>
                    </FormControl>
                    <FormControl fullWidth>
                        <Button style={{justifyContent: 'flex-start'}}> <FormatListBulleted
                            style={{paddingRight: '10px'}}/>Служебные отметки</Button>
                    </FormControl>
                    <FormControl>
                        <Button style={{justifyContent: 'flex-start'}}> <Edit style={{paddingRight: '10px'}}/>Карточки и
                            заявки по
                            телефону <ArrowDropDownIcon/> </Button>
                    </FormControl>
                    <FormControl fullWidth>
                        <Button style={{justifyContent: 'flex-start'}}> <Edit style={{paddingRight: '10px'}}/>Подключение
                            услуг/сервисов<ArrowDropDownIcon/></Button>
                    </FormControl>
                </Drawer>
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
                    <MenuItem onClick={() => this.handleMenuItemClick("companyAgreements")}>
                        Список договоров юр.лиц
                    </MenuItem>
                    <MenuItem disabled onClick={() => this.handleMenuItemClick("requests")}>
                        Список запросов
                    </MenuItem>
                </Popover>
            </MuiAppBar>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        managersDialogOpen: state.main.managersDialogOpen
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AppBar));
