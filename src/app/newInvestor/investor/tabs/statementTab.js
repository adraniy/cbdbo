import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from '../../../redux/actions'
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";


const styles = theme => ({});


export class StatementTab extends React.Component {

    render() {
        return <div>
            <Grid container>
                <Grid item xs={6}> asd</Grid>

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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(StatementTab));