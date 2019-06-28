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
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import FormControl from "@material-ui/core/FormControl";
import Add from "@material-ui/icons/Add";
import Refresh from "@material-ui/icons/Refresh";
import PageView from "@material-ui/icons/Pageview";
import LocalActivity from "@material-ui/icons/LocalActivity";

const styles = theme => ({
    root: {
        padding: '0', borderBottom: '1px solid #ccc', backgroundColor: '#fafbfa'
    }
});

export class ManagersModal extends React.Component {
    render() {
        return <Dialog fullScreen
                       open={this.props.managersDialogOpen}
                       onClose={this.props.actions.toggleManagersDialog}>
            <DialogTitle classes={{root: this.props.classes.root}}>
                <Toolbar style={{minHeight: '48px'}}>
                    <Typography variant="h6" style={{display: "flex", paddingRight: '20px'}}>
                        <Logo/>
                        <span style={{lineHeight: '2.5'}}> Распорядители </span>
                    </Typography>
                    <IconButton style={{position: 'absolute', right: 0}}
                                onClick={this.props.actions.toggleManagersDialog}>
                        <CloseIcon/>
                    </IconButton>
                </Toolbar>
            </DialogTitle>
            <DialogContent>
                <DialogContent>
                    <Paper style={{height: '100%'}}>
                        <FormControl style={{marginTop: '20px', marginLeft: '20px'}}>
                            <Button style={{justifyContent: 'flex-start'}}
                                    onClick={() => {
                                        this.props.actions.toggleManagerDialog();
                                    }}> <Add color={"primary"}
                                             style={{paddingRight: '10px'}}/> Добавить </Button>
                        </FormControl>
                        <FormControl style={{marginTop: '20px', marginLeft: '20px'}}>
                            <Button style={{justifyContent: 'flex-start'}}> <PageView
                                style={{paddingRight: '10px'}}/> Посмотреть </Button>
                        </FormControl>
                        <FormControl style={{marginTop: '20px', marginLeft: '20px'}}>
                            <Button style={{justifyContent: 'flex-start'}}> <Refresh
                                style={{paddingRight: '10px'}}/> Обновить </Button>
                        </FormControl>
                        <FormControl style={{marginTop: '20px', marginLeft: '20px'}}>
                            <Button style={{justifyContent: 'flex-start'}}> <LocalActivity
                                style={{paddingRight: '10px'}}/> Сделать акивным </Button>
                        </FormControl>

                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Код</TableCell>
                                    <TableCell>Фамилия</TableCell>
                                    <TableCell>Отчество</TableCell>
                                    <TableCell>Экземпляр</TableCell>
                                    <TableCell>Статус отправки</TableCell>
                                    <TableCell>Дата начала полномочий</TableCell>
                                    <TableCell>Дата конца полномочий</TableCell>
                                    <TableCell>Активный</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>
                </DialogContent>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.props.actions.toggleManagersDialog} color="primary">
                    ОК
                </Button>
            </DialogActions>
        </Dialog>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ManagersModal));