import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from '../../../redux/actions'
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import {Duo} from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const styles = theme => ({});


export class TailingsTab extends React.Component {

    render() {
        return <div>
            <Grid container>
                <Grid item xs={12}>
                    <TextField fullWidth label="Остатки в системе DiaSoft " disabled value={""}
                    multiline rows={10}/>
                </Grid>
                <Grid item xs={12}>

                    <TextField fullWidth label="Остатки в АС Депозитарий " disabled value={""}
                               multiline rows={10}/>
                    <Button color="primary">
                        Получить остатки из АС Депозитарий
                    </Button>
                </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TailingsTab));