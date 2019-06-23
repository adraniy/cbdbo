import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from '../../../redux/actions'
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import {Duo} from "@material-ui/icons";


const styles = theme => ({});


export class FatcaTab extends React.Component {

    render() {
        return <div>
            <Grid container>
                <Grid item xs={6}> FATCA</Grid>

            </Grid>
        </div>
    }
}

const mapStateToProps = function (state) {
    return {
        investorTab: state.main.investorTab
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FatcaTab));