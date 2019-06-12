import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
            padding: '8px 24px', borderBottom: '1px solid #ccc'
    }
});
export class NewInvestorDialog extends React.Component {
    render() {
        return <Dialog fullScreen
                       open={this.props.newInvestorDialogOpen}
            onClose={this.props.actions.toggleInvestorDialog}>
            <DialogTitle classes={{root: this.props.classes.root}}>
                <span style={{lineHeight: '2.5'}}>Договор брокерского обслуживания</span>
                <IconButton style={{float: 'right'}}  onClick={this.props.actions.toggleInvestorDialog}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Let Google help apps determine location. This means sending anonymous location data to
                    Google, even when no apps are running.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.props.actions.toggleInvestorDialog} color="primary">
                    ОК
                </Button>
            </DialogActions>
        </Dialog>
    }
}

const mapStateToProps = function (state) {
    return {
        newInvestorDialogOpen: state.main.newInvestorDialogOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NewInvestorDialog));