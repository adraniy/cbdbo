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
import InvestorPanel from "./inverstorPanel";
import Investor from "./investor/investor";
import {ReactComponent as Logo} from '../appbar/logo.svg';
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

const styles = theme => ({
    root: {
        padding: '0', borderBottom: '1px solid #ccc', backgroundColor: '#fafbfa'
    }
});

export class NewInvestorDialog extends React.Component {
    render() {
        return <Dialog fullScreen
                       open={this.props.newInvestorDialogOpen}
                       onClose={this.props.actions.toggleInvestorDialog}>
            <DialogTitle classes={{root: this.props.classes.root}}>
                <Toolbar style={{minHeight: '48px'}}>
                    <Typography variant="h6" style={{display: "flex", paddingRight: '20px'}}>
                        <Logo/>
                        <span style={{lineHeight: '2.5'}}> Договор брокерского обслуживания</span>
                    </Typography>
                    <IconButton style={{position: 'absolute', right: 0}} onClick={this.props.actions.toggleInvestorDialog}>
                        <CloseIcon/>
                    </IconButton>
                </Toolbar>
            </DialogTitle>
            <DialogContent>
                <DialogContent>
                    <InvestorPanel/>
                    <Investor />
                </DialogContent>
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
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NewInvestorDialog));