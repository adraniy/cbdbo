import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from '../../../../redux/actions'
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import {datePicker, select, text} from "../../../../common/utils";


const styles = theme => ({});

export class RegistrationData extends React.Component {

    render() {
        return <div>
            <Grid container>
                <Grid item xs={6}>
                    <Grid container>
                        <Grid item xs={6}>
                            <FormControl style={{width: '350px'}}>
                                {datePicker('Дата ЕГРЮЛ', this.props.period, this.props.actions.setQtCdPeriod)}
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} style={{paddingLeft: '20px'}}>
                            <FormControl style={{width: '350px'}}>
                                <TextField required label={'Орган ЕГРЮЛ'} value={this.props.name}
                                           onChange={this.props.actions.setQtCdName}/>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl style={{width: '350px'}}>
                                {datePicker('Дата свидетельства госрегистрации', this.props.period, this.props.actions.setQtCdPeriod)}
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl style={{width: '350px'}}>
                                <TextField required label={'Номер свидетельства госрегистрации'} value={this.props.name}
                                           onChange={this.props.actions.setQtCdName}/>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} style={{paddingLeft: '20px'}}>
                            <FormControl style={{width: '350px'}}>
                                <TextField required label={'Орган свидетельства госрегистрации'} value={this.props.name}
                                           onChange={this.props.actions.setQtCdName}/>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}>
                    <FormControl style={{width: '350px'}}>
                        {select('Вид лицензии')}
                        {text('Серия и номер лицензии')}
                        {text('Орган регистрации лицензии')}
                        {datePicker('Дата выдачи')}
                        {datePicker('Срок действия')}
                        {select('Вид лицензируемой деятельности')}</FormControl>
                </Grid>
            </Grid>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RegistrationData));