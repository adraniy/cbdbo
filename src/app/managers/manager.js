import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import {withStyles} from '@material-ui/core/styles';

import {ReactComponent as Logo} from '../appbar/logo.svg';
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import MuiAppBar from "@material-ui/core/AppBar/AppBar";
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import QuestionnaireTab from "./tabs/questionnaire/questionnaireTab";
import BaseTab from "./tabs/Base";

import Drawer from "@material-ui/core/Drawer";
import ManagerPanel from "./managerPanel";

const styles = theme => ({
    root: {
        padding: '0', borderBottom: '1px solid #ccc', backgroundColor: '#fafbfa'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    }
});

export class Manager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openDrawer: false
        }
    }

    render() {
        const classes = this.props.classes;
        return <Dialog fullScreen
                       open={this.props.managerDialogOpen}
                       onClose={this.props.actions.toggleManagerDialog}>
            <DialogTitle classes={{root: this.props.classes.root}}>
                <Toolbar style={{minHeight: '48px'}}>
                    <Typography variant="h6" style={{display: "flex", paddingRight: '20px'}}>
                        <Logo/>
                        <span style={{lineHeight: '2.5'}}>Новый распорядитель</span>
                    </Typography>
                    <IconButton style={{position: 'absolute', right: 0}}
                                onClick={this.props.actions.toggleManagerDialog}>
                        <CloseIcon/>
                    </IconButton>
                </Toolbar>
            </DialogTitle>
            <DialogContent>
                <DialogContent>
                    <Paper style={{height: '100%'}}>
                        <MuiAppBar position="static">
                            <Toolbar style={{minHeight: '48px'}}>
                                <IconButton edge="start" className={classes.menuButton} color="inherit"
                                            aria-label="Menu"
                                            onClick={() => this.setState({openDrawer: !this.state.openDrawer})}>
                                    <MenuIcon/>
                                </IconButton>

                                <Tabs value={this.props.newManagerTab} onChange={this.props.actions.managerDialogTab}>
                                    <Tab label="Анкета"/>
                                    <Tab label="Основание"/>
                                </Tabs>
                            </Toolbar>
                        </MuiAppBar>
                        <div style={{padding: '20px'}}>
                            {this.props.newManagerTab === 0 && <QuestionnaireTab/>}
                            {this.props.newManagerTab === 1 && <BaseTab/>}
                        </div>
                        <Drawer anchor="top" open={this.state.openDrawer}
                                onClose={() => this.setState({openDrawer: false})}>
                            <ManagerPanel/>
                        </Drawer>
                    </Paper>
                </DialogContent>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.props.actions.toggleManagerDialog} color="primary">
                    ОК
                </Button>
            </DialogActions>
        </Dialog>
    }
}

const mapStateToProps = function (state) {
    return {
        managerDialogOpen: state.main.managerDialogOpen,
        newManagerTab: state.main.newManagerTab,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Manager));